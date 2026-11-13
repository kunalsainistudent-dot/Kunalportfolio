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

    try {
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountToCharge,
          currency: "INR",
          notes: {
            serviceId: service.id,
            serviceTitle: service.title,
            paymentOption,
            clientName: name,
            clientEmail: email,
            clientPhone: phone,
            clientWebsite: website || "N/A",
            clientNotes: notes || "N/A",
          },
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.orderId) {
        throw new Error(orderData.error || "Order creation failed. Please retry.");
      }

      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "Kunal M Saini",
        description: `${service.title} (${paymentOption === "deposit" ? "10% Token Deposit" : "Full Payment"})`,
        image: "/logo.png",
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderDetails: {
                  serviceId: service.id,
                  serviceTitle: service.title,
                  paymentOption,
                  amountPaid: amountToCharge,
                  name,
                  email,
                  phone,
                  website,
                },
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.verified) {
              setSuccessData({
                paymentId: response.razorpay_payment_id,
                amountPaid: amountToCharge,
                option: paymentOption,
              });
              setIsSuccess(true);
            } else {
              setErrorMessage(
                verifyData.error ||
                  "Verification issue. If amount was debited, contact Kunal immediately on WhatsApp."
              );
            }
          } catch (err: any) {
            setErrorMessage(
              "Payment verification request failed. Please check WhatsApp confirmation."
            );
          } finally {
            setIsLoading(false);
          }
        },
        prefill: {
          name,
          email,
          contact: phone,
        },
        notes: {
          service: service.title,
          bookingType: paymentOption,
        },
        theme: {
          color: (typeof window !== "undefined" && getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim()) || "#ee8733",
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.on("payment.failed", function (response: any) {
        setIsLoading(false);
        setErrorMessage(
          response.error?.description || "Payment was declined by your bank/UPI provider."
        );
      });
      razorpayInstance.open();
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(
        err.message || "An error occurred while connecting to Razorpay. Please retry."
      );
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Kunal, I just completed booking for *${service.title}* ` +
      `(${paymentOption === "deposit" ? "10% Token Deposit" : "Full Payment"} - ₹${amountToCharge.toLocaleString("en-IN")})!\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
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
          className="fixed inset-0 bg-[var(--color-bg-darkest)]/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-2xl bg-[var(--color-card-surface)] border border-[var(--color-border)] rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden z-10 my-8"
        >
          {/* Top accent border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-accent)]" />

          {/* Modal Header */}
          <div className="p-6 sm:p-8 pb-4 border-b border-[var(--color-border)] flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border-40)] text-[var(--color-accent)] text-[11px] font-['Inter'] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                <span>Priority Booking Checkout</span>
              </div>
              <h2 className="font-['Inter'] text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]">
                {service.title}
              </h2>
              <p className="font-['Inter'] text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">
                {service.typicalEngagement || "Standard Engagement"}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)] transition-colors"
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
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border-40)] flex items-center justify-center text-[var(--color-accent)] shadow-[0_0_30px_var(--color-accent-glow)]">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>

                <div>
                  <h3 className="font-['Inter'] text-2xl font-extrabold text-[var(--color-text)]">
                    Payment Confirmed &bull; Spot Reserved!
                  </h3>
                  <p className="font-['Inter'] text-sm text-[var(--color-text-secondary)] mt-2 max-w-md mx-auto">
                    Your priority onboarding slot has been locked into Kunal&apos;s direct calendar. An official digital invoice and onboarding checklist have been dispatched.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="w-full p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] text-left flex flex-col gap-3 font-['Inter'] text-xs text-[var(--color-text-secondary)]">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)]">
                    <span>Razorpay Payment ID:</span>
                    <span className="font-mono text-[var(--color-text)] font-bold">{successData.paymentId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Booked:</span>
                    <span className="text-[var(--color-text)] font-bold">{service.title}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Amount Transacted:</span>
                    <span className="text-[var(--color-accent)] font-extrabold text-base">
                      ₹{successData.amountPaid.toLocaleString("en-IN")}
                    </span>
                  </div>
                  {successData.option === "deposit" && (
                    <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)]">
                      <span>Remaining Balance on Milestone:</span>
                      <span className="text-[var(--color-text)] font-bold">₹{balanceRemaining.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-full font-['Inter'] font-bold text-xs sm:text-sm text-[var(--color-bg)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] shadow-[0_4px_16px_var(--color-accent-glow)] flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Connect on WhatsApp</span>
                  </a>
                  <a
                    href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-full font-['Inter'] font-bold text-xs sm:text-sm text-[var(--color-text)] bg-[var(--color-card-surface)] hover:bg-[var(--color-bg)] border-2 border-[var(--color-text)] flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Schedule Kickoff Call</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full font-['Inter'] font-bold text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] bg-[var(--color-bg)] border border-[var(--color-border)] transition-colors"
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
                  <label className="block text-xs font-['Inter'] font-bold uppercase tracking-wider text-[var(--color-text)] mb-3">
                    Select Your Payment Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Option 1: 10% Deposit */}
                    <button
                      type="button"
                      onClick={() => setPaymentOption("deposit")}
                      className={`p-5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all ${
                        paymentOption === "deposit"
                          ? "bg-[var(--color-accent-subtle)] border-[var(--color-accent)] shadow-xs"
                          : "bg-[var(--color-bg)] border-[var(--color-border)] hover:border-[var(--color-accent-border-40)]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-['Inter'] text-xs font-bold text-[var(--color-text)]">
                          10% Token Deposit
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            paymentOption === "deposit"
                              ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                              : "border-[var(--color-border)]"
                          }`}
                        >
                          {paymentOption === "deposit" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-bg)]" />
                          )}
                        </div>
                      </div>
                      <div className="font-['Inter'] text-2xl font-extrabold text-[var(--color-accent)] my-1">
                        ₹{depositAmount.toLocaleString("en-IN")}
                      </div>
                      <p className="font-['Inter'] text-[11px] text-[var(--color-text-secondary)]">
                        Locks calendar priority &amp; kickoff. Remaining balance invoiced at milestones.
                      </p>
                    </button>

                    {/* Option 2: 100% Full Payment */}
                    <button
                      type="button"
                      onClick={() => setPaymentOption("full")}
                      className={`p-5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all ${
                        paymentOption === "full"
                          ? "bg-[var(--color-accent-subtle)] border-[var(--color-accent)] shadow-xs"
                          : "bg-[var(--color-bg)] border-[var(--color-border)] hover:border-[var(--color-accent-border-40)]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-['Inter'] text-xs font-bold text-[var(--color-text)]">
                          100% Full Upfront
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            paymentOption === "full"
                              ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                              : "border-[var(--color-border)]"
                          }`}
                        >
                          {paymentOption === "full" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-bg)]" />
                          )}
                        </div>
                      </div>
                      <div className="font-['Inter'] text-2xl font-extrabold text-[var(--color-text)] my-1">
                        ₹{service.basePrice.toLocaleString("en-IN")}
                      </div>
                      <p className="font-['Inter'] text-[11px] text-[var(--color-text-secondary)]">
                        Instant onboarding &amp; zero milestone invoice friction throughout engagement.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Client Information Form */}
                <div className="space-y-4">
                  <span className="block text-xs font-['Inter'] font-bold uppercase tracking-wider text-[var(--color-text)]">
                    Your Business Contact Details
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-['Inter'] font-bold text-[var(--color-text-secondary)] mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-accent)]" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Kunal Saini"
                          className="w-full h-11 pl-10 pr-4 rounded-xl bg-[var(--color-bg)] text-[var(--color-text)] text-xs font-['Inter'] font-medium border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-['Inter'] font-bold text-[var(--color-text-secondary)] mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-accent)]" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full h-11 pl-10 pr-4 rounded-xl bg-[var(--color-bg)] text-[var(--color-text)] text-xs font-['Inter'] font-medium border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp Phone */}
                    <div>
                      <label className="block text-xs font-['Inter'] font-bold text-[var(--color-text-secondary)] mb-1">
                        WhatsApp Contact Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-accent)]" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full h-11 pl-10 pr-4 rounded-xl bg-[var(--color-bg)] text-[var(--color-text)] text-xs font-['Inter'] font-medium border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Website / Ad Account */}
                    <div>
                      <label className="block text-xs font-['Inter'] font-bold text-[var(--color-text-secondary)] mb-1">
                        Website / Brand URL (Optional)
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-accent)]" />
                        <input
                          type="text"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="https://yourbrand.com"
                          className="w-full h-11 pl-10 pr-4 rounded-xl bg-[var(--color-bg)] text-[var(--color-text)] text-xs font-['Inter'] font-medium border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-['Inter'] font-bold text-[var(--color-text-secondary)] mb-1">
                      Target Growth Bottleneck / Goals (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Scaling Meta Ads from ₹2L to ₹10L/mo, CAPI integration, or autonomous WhatsApp lead bot."
                      className="w-full p-3 rounded-xl bg-[var(--color-bg)] text-[var(--color-text)] text-xs font-['Inter'] font-medium border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-between">
                  <div>
                    <span className="block font-['Inter'] text-xs font-bold text-[var(--color-text-secondary)]">
                      Total Payable Now:
                    </span>
                    <span className="font-['Inter'] text-[11px] text-[var(--color-text-secondary)]">
                      {paymentOption === "deposit"
                        ? `10% Token Deposit (Balance: ₹${balanceRemaining.toLocaleString("en-IN")})`
                        : "100% Full Upfront Settlement"}
                    </span>
                  </div>
                  <div className="font-['Inter'] text-3xl font-extrabold text-[var(--color-accent)]">
                    ₹{amountToCharge.toLocaleString("en-IN")}
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit / Open Razorpay Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-full font-['Inter'] font-bold text-sm text-[var(--color-bg)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-[0_4px_20px_var(--color-accent-glow)] flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[var(--color-bg)]" />
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
                <div className="flex items-center justify-center gap-2 text-[var(--color-text-secondary)] font-['Inter'] text-[11px] text-center font-medium">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
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
