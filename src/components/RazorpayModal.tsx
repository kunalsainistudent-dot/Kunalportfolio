"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceItem } from "@/data/pricingData";
import {
  X,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  User,
  Globe,
  Loader2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceItem | null;
}

export default function RazorpayModal({
  isOpen,
  onClose,
  service,
}: RazorpayModalProps) {
  const [paymentOption, setPaymentOption] = useState<"deposit" | "full">("deposit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [successData, setSuccessData] = useState<{
    paymentId: string;
    amountPaid: number;
    option: "deposit" | "full";
  } | null>(null);

  // Dynamically load Razorpay checkout script
  useEffect(() => {
    if (typeof window !== "undefined" && !window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Reset form when service or modal state changes
  useEffect(() => {
    if (isOpen) {
      setPaymentOption("deposit");
      setIsSuccess(false);
      setSuccessData(null);
      setErrorMessage("");
    }
  }, [isOpen, service]);

  if (!isOpen || !service) return null;

  const depositAmount = Math.round(service.basePrice * 0.1);
  const amountToCharge = paymentOption === "deposit" ? depositAmount : service.basePrice;
  const balanceRemaining =
    paymentOption === "deposit" ? service.basePrice - depositAmount : 0;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, Phone).");
      return;
    }

    if (!window.Razorpay) {
      setErrorMessage("Razorpay checkout is initializing. Please wait a moment and retry.");
      return;
    }

    setIsLoading(true);

    let razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    // Fallback: fetch from server endpoint if not set on client
    if (!razorpayKey) {
      try {
        const keyRes = await fetch("/api/razorpay/key");
        if (keyRes.ok) {
          const keyData = await keyRes.json();
          razorpayKey = keyData.keyId;
        }
      } catch (err) {
        console.warn("Could not fetch Razorpay key from API route", err);
      }
    }

    if (!razorpayKey) {
      setIsLoading(false);
      setErrorMessage(
        "Payment configuration missing. Please reach out directly on WhatsApp or email."
      );
      return;
    }

    const options = {
      key: razorpayKey,
      amount: amountToCharge * 100, // in paise
      currency: "INR",
      name: "Kunal M Saini",
      description: `${paymentOption === "deposit" ? "10% Token Deposit" : "Full Payment"}: ${service.title}`,
      image: "/logo.png",
      handler: function (response: any) {
        setIsLoading(false);
        setIsSuccess(true);
        setSuccessData({
          paymentId: response.razorpay_payment_id,
          amountPaid: amountToCharge,
          option: paymentOption,
        });

        // Trigger Google Ads / Meta conversion signals
        if (typeof window !== "undefined") {
          if ((window as any).gtag) {
            (window as any).gtag("event", "purchase", {
              transaction_id: response.razorpay_payment_id,
              value: amountToCharge,
              currency: "INR",
              items: [{ item_name: service.title, price: amountToCharge }],
            });
          }
          if ((window as any).fbq) {
            (window as any).fbq("track", "Purchase", {
              value: amountToCharge,
              currency: "INR",
              content_name: service.title,
            });
          }
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        service_id: service.id,
        service_title: service.title,
        payment_type: paymentOption,
        client_website: website || "N/A",
        additional_notes: notes || "N/A",
      },
      theme: {
        color: "#ee8733",
      },
      modal: {
        ondismiss: function () {
          setIsLoading(false);
        },
      },
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (resp: any) {
        setIsLoading(false);
        setErrorMessage(
          resp.error?.description || "Payment failed or was cancelled. Please try again."
        );
      });
      rzp.open();
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage("Could not initialize Razorpay modal. Please check your connection.");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Kunal, I just completed a booking for *${service.title}* via Razorpay.\n\n` +
      `*Payment Option:* ${paymentOption === "deposit" ? "10% Token Deposit" : "Full Payment"}\n` +
      `*Amount Paid:* ₹${amountToCharge.toLocaleString("en-IN")}\n` +
      `*Payment ID:* ${successData?.paymentId || "Pending"}\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Website:* ${website || "N/A"}\n\n` +
      `Let's schedule our kickoff strategy call!`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08090d]/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-2xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden z-10 my-8"
        >
          {/* Top orange gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ee8733]" />

          {/* Modal Header */}
          <div className="p-6 sm:p-8 pb-4 border-b border-[rgba(220,223,227,0.12)] flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[rgba(238,135,51,0.15)] border border-[#ee8733]/40 text-[#ee8733] text-[11px] font-['Inter'] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#ee8733]" />
                <span>Priority Booking Checkout</span>
              </div>
              <h2 className="font-['Inter'] text-2xl sm:text-3xl font-extrabold text-[#ffffff]">
                {service.title}
              </h2>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#dcdfe3] mt-1">
                {service.typicalEngagement || "Standard Engagement"}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#171c29] text-[#dcdfe3] hover:text-[#ffffff] border border-[rgba(220,223,227,0.12)] transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 pt-6">
            {isSuccess && successData ? (
              /* SUCCESS STATE */
              <div className="py-6 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[rgba(238,135,51,0.15)] border border-[#ee8733]/40 flex items-center justify-center text-[#ee8733] shadow-[0_0_30px_rgba(238,135,51,0.25)]">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>

                <div>
                  <h3 className="font-['Inter'] text-2xl font-extrabold text-[#ffffff]">
                    Payment Confirmed &bull; Spot Reserved!
                  </h3>
                  <p className="font-['Inter'] text-sm text-[#dcdfe3] mt-2 max-w-md mx-auto">
                    Your priority onboarding slot has been locked into Kunal&apos;s direct calendar. An official digital invoice and onboarding checklist have been dispatched.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="w-full p-6 rounded-2xl bg-[#171c29] border border-[rgba(220,223,227,0.12)] text-left flex flex-col gap-3 font-['Inter'] text-xs text-[#dcdfe3]">
                  <div className="flex items-center justify-between pb-2 border-b border-[rgba(220,223,227,0.12)]">
                    <span>Razorpay Payment ID:</span>
                    <span className="font-mono text-[#ffffff] font-bold">{successData.paymentId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Booked:</span>
                    <span className="text-[#ffffff] font-bold">{service.title}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Amount Transacted:</span>
                    <span className="text-[#ee8733] font-extrabold text-base">
                      ₹{successData.amountPaid.toLocaleString("en-IN")}
                    </span>
                  </div>
                  {successData.option === "deposit" && (
                    <div className="flex items-center justify-between pt-2 border-t border-[rgba(220,223,227,0.12)]">
                      <span>Remaining Balance on Milestone:</span>
                      <span className="text-[#ffffff] font-bold">₹{balanceRemaining.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-full font-['Inter'] font-bold text-xs sm:text-sm text-[#171c29] bg-[#ee8733] orange-glow flex items-center justify-center gap-2 hover:bg-[#ed8532] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Connect on WhatsApp</span>
                  </a>
                  <a
                    href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-full font-['Inter'] font-bold text-xs sm:text-sm text-[#ffffff] bg-[#0c0e14] hover:bg-[#171c29] border-2 border-[#ffffff] flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Schedule Kickoff Call</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full font-['Inter'] font-bold text-xs text-[#dcdfe3] hover:text-[#ffffff] bg-[#171c29] border border-[rgba(220,223,227,0.12)] transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* BOOKING & PAYMENT FORM */
              <form onSubmit={handlePayment} className="space-y-6">
                {/* Payment Option Selector */}
                <div>
                  <label className="block text-xs font-['Inter'] font-bold uppercase tracking-wider text-[#ffffff] mb-3">
                    Select Your Payment Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Option 1: 10% Deposit */}
                    <button
                      type="button"
                      onClick={() => setPaymentOption("deposit")}
                      className={`p-5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all ${
                        paymentOption === "deposit"
                          ? "bg-[rgba(238,135,51,0.15)] border-[#ee8733] shadow-sm"
                          : "bg-[#171c29] border-[rgba(220,223,227,0.12)] hover:border-[#ee8733]/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-['Inter'] text-xs font-bold text-[#ffffff]">
                          10% Token Deposit
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            paymentOption === "deposit"
                              ? "border-[#ee8733] bg-[#ee8733]"
                              : "border-[rgba(220,223,227,0.2)]"
                          }`}
                        >
                          {paymentOption === "deposit" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#171c29]" />
                          )}
                        </div>
                      </div>
                      <div className="font-['Inter'] text-2xl font-extrabold text-[#ee8733] my-1">
                        ₹{depositAmount.toLocaleString("en-IN")}
                      </div>
                      <p className="font-['Inter'] text-[11px] text-[#dcdfe3]">
                        Locks calendar priority &amp; kickoff. Remaining balance invoiced at milestones.
                      </p>
                    </button>

                    {/* Option 2: 100% Full Payment */}
                    <button
                      type="button"
                      onClick={() => setPaymentOption("full")}
                      className={`p-5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all ${
                        paymentOption === "full"
                          ? "bg-[rgba(238,135,51,0.15)] border-[#ee8733] shadow-sm"
                          : "bg-[#171c29] border-[rgba(220,223,227,0.12)] hover:border-[#ee8733]/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-['Inter'] text-xs font-bold text-[#ffffff]">
                          100% Full Upfront
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            paymentOption === "full"
                              ? "border-[#ee8733] bg-[#ee8733]"
                              : "border-[rgba(220,223,227,0.2)]"
                          }`}
                        >
                          {paymentOption === "full" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#171c29]" />
                          )}
                        </div>
                      </div>
                      <div className="font-['Inter'] text-2xl font-extrabold text-[#ffffff] my-1">
                        ₹{service.basePrice.toLocaleString("en-IN")}
                      </div>
                      <p className="font-['Inter'] text-[11px] text-[#dcdfe3]">
                        Instant onboarding &amp; zero milestone invoice friction throughout engagement.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Client Information Form */}
                <div className="space-y-4">
                  <span className="block text-xs font-['Inter'] font-bold uppercase tracking-wider text-[#ffffff]">
                    Your Business Contact Details
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-['Inter'] font-bold text-[#dcdfe3] mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#ee8733]" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Kunal Saini"
                          className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#171c29] text-[#ffffff] text-xs font-['Inter'] font-medium border border-[rgba(220,223,227,0.12)] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-['Inter'] font-bold text-[#dcdfe3] mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#ee8733]" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#171c29] text-[#ffffff] text-xs font-['Inter'] font-medium border border-[rgba(220,223,227,0.12)] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp Phone */}
                    <div>
                      <label className="block text-xs font-['Inter'] font-bold text-[#dcdfe3] mb-1">
                        WhatsApp Contact Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#ee8733]" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#171c29] text-[#ffffff] text-xs font-['Inter'] font-medium border border-[rgba(220,223,227,0.12)] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Website / Ad Account */}
                    <div>
                      <label className="block text-xs font-['Inter'] font-bold text-[#dcdfe3] mb-1">
                        Website / Brand URL (Optional)
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#ee8733]" />
                        <input
                          type="text"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="https://yourbrand.com"
                          className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#171c29] text-[#ffffff] text-xs font-['Inter'] font-medium border border-[rgba(220,223,227,0.12)] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-['Inter'] font-bold text-[#dcdfe3] mb-1">
                      Target Growth Bottleneck / Goals (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Scaling Meta Ads from ₹2L to ₹10L/mo, CAPI integration, or autonomous WhatsApp lead bot."
                      className="w-full p-3 rounded-xl bg-[#171c29] text-[#ffffff] text-xs font-['Inter'] font-medium border border-[rgba(220,223,227,0.12)] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Order Summary & Live Charge Calculation */}
                <div className="p-5 rounded-2xl bg-[#171c29] border border-[rgba(220,223,227,0.12)] flex items-center justify-between">
                  <div>
                    <span className="block font-['Inter'] text-xs font-bold text-[#dcdfe3]">
                      Total Payable Now:
                    </span>
                    <span className="font-['Inter'] text-[11px] text-[#dcdfe3]">
                      {paymentOption === "deposit"
                        ? `10% Token Deposit (Balance: ₹${balanceRemaining.toLocaleString("en-IN")})`
                        : "100% Full Upfront Settlement"}
                    </span>
                  </div>
                  <div className="font-['Inter'] text-3xl font-extrabold text-[#ee8733]">
                    ₹{amountToCharge.toLocaleString("en-IN")}
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-[#171c29] border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit / Open Razorpay Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-full font-['Inter'] font-bold text-sm text-[#171c29] bg-[#ee8733] orange-glow flex items-center justify-center gap-2 hover:bg-[#ed8532] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[#171c29]" />
                      <span>Initializing Razorpay Secure Gateway...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      <span>
                        Proceed to Razorpay Secure Gateway &bull; ₹
                        {amountToCharge.toLocaleString("en-IN")}
                      </span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>

                {/* Trust & Encryption Badges */}
                <div className="flex items-center justify-center gap-2 text-[#dcdfe3] font-['Inter'] text-[11px] text-center font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#ee8733] shrink-0" />
                  <span>
                    256-bit Encrypted Transaction &bull; Direct Razorpay Gateway &bull; UPI, Cards, NetBanking
                  </span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
