"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  Lock,
  ArrowRight,
  Loader2,
  Calendar,
  Sparkles,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { ServiceItem } from "@/data/pricingData";

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
  const [paymentType, setPaymentType] = useState<"deposit" | "full">("deposit");
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    notes: "",
  });

  // Success state
  const [successData, setSuccessData] = useState<{
    paymentId: string;
    amount: number;
    type: "deposit" | "full";
  } | null>(null);

  const [apiKey, setApiKey] = useState<string>(
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || ""
  );

  // Dynamically load Razorpay checkout script and resolve key from server if needed
  useEffect(() => {
    if (typeof window !== "undefined" && !(window as any).Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      script.onerror = () => setScriptLoaded(false);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    // If NEXT_PUBLIC_RAZORPAY_KEY_ID is missing or placeholder, fetch from /api/razorpay/key
    if (!apiKey || apiKey === "rzp_test_placeholder") {
      fetch("/api/razorpay/key")
        .then((res) => res.json())
        .then((data) => {
          if (data?.key && data.key !== "rzp_test_placeholder") {
            setApiKey(data.key);
          }
        })
        .catch(() => {});
    }
  }, [apiKey]);

  // Reset form when modal opens with a new service
  useEffect(() => {
    if (isOpen) {
      setSuccessData(null);
      setError(null);
      setLoading(false);
    }
  }, [isOpen, service]);

  if (!isOpen || !service) return null;

  const totalFee = service.basePrice;
  const depositFee = Math.round(totalFee * 0.1);
  const dueToday = paymentType === "deposit" ? depositFee : totalFee;
  const balanceRemaining = paymentType === "deposit" ? totalFee - depositFee : 0;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please complete your Name, Email, and Phone number.");
      return;
    }

    if (!scriptLoaded || !(window as any).Razorpay) {
      setError("Razorpay SDK is initializing. Please check connection and try again.");
      return;
    }

    setLoading(true);

    try {
      const activeKey = apiKey || "rzp_test_placeholder";

      const options = {
        key: activeKey,
        amount: dueToday * 100, // in paise
        currency: "INR",
        name: "Kunal M Saini",
        description: `${service.title} — ${
          paymentType === "deposit" ? "10% Booking Deposit" : "Full Upfront Payment"
        }`,
        image: "/logo.png",
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          service_id: service.id,
          service_title: service.title,
          payment_type: paymentType,
          company: formData.company || "N/A",
          website: formData.website || "N/A",
        },
        theme: {
          color: "#ee8733",
        },
        handler: function (response: any) {
          setLoading(false);
          setSuccessData({
            paymentId: response.razorpay_payment_id || `pay_${Date.now()}`,
            amount: dueToday,
            type: paymentType,
          });
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (failResponse: any) {
        setLoading(false);
        setError(
          failResponse.error?.description || "Payment failed or cancelled. Please try again."
        );
      });

      rzp.open();
    } catch (err: any) {
      setLoading(false);
      setError(err?.message || "Failed to initiate Razorpay checkout.");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#ffffff] border border-[#eaddcf] rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.2)] overflow-hidden z-10 my-8"
        >
          {/* Top Accent Orange Border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ee8733]" />

          {/* Modal Header */}
          <div className="p-6 sm:p-8 pb-4 border-b border-[#eaddcf] flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fff2e6] border border-[#ee8733]/40 text-[#ee8733] text-[11px] font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#ee8733]" />
                Service Checkout &amp; Booking
              </div>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-[#0c0a09]">
                {service.title}
              </h2>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#57534e] mt-1">
                Typical Scope: {service.typicalEngagement}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#fcf2e8] text-[#57534e] hover:text-[#0c0a09] border border-[#eaddcf] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 pt-6 max-h-[75vh] overflow-y-auto">
            {successData ? (
              /* Success Confirmation View */
              <div className="py-6 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#fff2e6] border border-[#ee8733]/40 flex items-center justify-center text-[#ee8733] shadow-[0_0_30px_rgba(238,135,51,0.25)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#0c0a09]">
                    Booking Initiated &amp; Confirmed!
                  </h3>
                  <p className="font-['Inter'] text-sm text-[#57534e] mt-2 max-w-md mx-auto">
                    Your {successData.type === "deposit" ? "10% booking deposit" : "full payment"} has been received. Kunal will review your business scope and reach out within 24 hours.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="w-full p-6 rounded-2xl bg-[#fcf2e8] border border-[#eaddcf] text-left flex flex-col gap-3 font-['Inter'] text-xs text-[#57534e]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#eaddcf]">
                    <span>Transaction Reference</span>
                    <span className="font-mono text-[#0c0a09] font-bold">{successData.paymentId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Booked</span>
                    <span className="text-[#0c0a09] font-bold">{service.title}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Amount Paid Today</span>
                    <span className="text-[#ee8733] font-extrabold text-base">
                      ₹{successData.amount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  {successData.type === "deposit" && balanceRemaining > 0 && (
                    <div className="flex items-center justify-between pt-2 border-t border-[#eaddcf]">
                      <span>Remaining Balance (upon delivery/milestone)</span>
                      <span className="text-[#0c0a09] font-bold">₹{balanceRemaining.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                </div>

                {/* Next Steps CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-2">
                  <a
                    href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-sm text-[#ffffff] bg-[#ee8733] orange-glow flex items-center justify-center gap-2 hover:bg-[#ff6a1a] transition-all"
                  >
                    <Calendar className="w-4 h-4 stroke-[2.5]" />
                    <span>Book Kickoff Call</span>
                  </a>
                  <a
                    href={`https://wa.me/91786?text=Hi%20Kunal,%20I%20just%20booked%20the%20${encodeURIComponent(
                      service.title
                    )}%20via%20your%20website%20(Ref:%20${successData.paymentId}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-sm text-[#0c0a09] bg-[#ffffff] hover:bg-[#fcf2e8] border-2 border-[#0c0a09] flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Connect on WhatsApp</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-xs text-[#57534e] hover:text-[#0c0a09] bg-[#fcf2e8] border border-[#eaddcf] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              /* Payment Configuration & Form View */
              <form onSubmit={handlePayment} className="flex flex-col gap-6">
                {/* 10% Deposit vs Full Payment Switch */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#0c0a09]">
                    Select Payment Commitment
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Option 1: 10% Deposit */}
                    <button
                      type="button"
                      onClick={() => setPaymentType("deposit")}
                      className={`p-5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all ${
                        paymentType === "deposit"
                          ? "bg-[#fff2e6] border-[#ee8733] shadow-sm"
                          : "bg-[#ffffff] border-[#eaddcf] hover:border-[#ee8733]/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09]">
                          10% Booking Deposit
                        </span>
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            paymentType === "deposit"
                              ? "border-[#ee8733] bg-[#ee8733]"
                              : "border-[#eaddcf]"
                          }`}
                        >
                          {paymentType === "deposit" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                          )}
                        </span>
                      </div>
                      <div className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#ee8733] my-1">
                        ₹{depositFee.toLocaleString("en-IN")}
                      </div>
                      <p className="font-['Inter'] text-[11px] text-[#57534e]">
                        Lock in calendar availability &amp; initialize kickoff. Balance billed upon delivery.
                      </p>
                    </button>

                    {/* Option 2: 100% Full Payment */}
                    <button
                      type="button"
                      onClick={() => setPaymentType("full")}
                      className={`p-5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all ${
                        paymentType === "full"
                          ? "bg-[#fff2e6] border-[#ee8733] shadow-sm"
                          : "bg-[#ffffff] border-[#eaddcf] hover:border-[#ee8733]/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09]">
                          100% Full Payment
                        </span>
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            paymentType === "full"
                              ? "border-[#ee8733] bg-[#ee8733]"
                              : "border-[#eaddcf]"
                          }`}
                        >
                          {paymentType === "full" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                          )}
                        </span>
                      </div>
                      <div className="font-['Space_Grotesk'] text-2xl font-extrabold text-[#0c0a09] my-1">
                        ₹{totalFee.toLocaleString("en-IN")}
                      </div>
                      <p className="font-['Inter'] text-[11px] text-[#57534e]">
                        Complete one-time settlement upfront for immediate priority execution.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Client Contact Inputs */}
                <div className="flex flex-col gap-4 pt-2">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#0c0a09]">
                    Client &amp; Company Telemetry
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#57534e]">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alex Rivera"
                        className="h-11 px-4 rounded-xl bg-[#fcf2e8] text-[#0c0a09] text-xs font-['Inter'] font-medium border border-[#eaddcf] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#57534e]">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@company.com"
                        className="h-11 px-4 rounded-xl bg-[#fcf2e8] text-[#0c0a09] text-xs font-['Inter'] font-medium border border-[#eaddcf] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#57534e]">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="h-11 px-4 rounded-xl bg-[#fcf2e8] text-[#0c0a09] text-xs font-['Inter'] font-medium border border-[#eaddcf] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#57534e]">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Rivera Growth Co"
                        className="h-11 px-4 rounded-xl bg-[#fcf2e8] text-[#0c0a09] text-xs font-['Inter'] font-medium border border-[#eaddcf] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#57534e]">
                      Website or Ad Account Link (Optional)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourbrand.com"
                      className="h-11 px-4 rounded-xl bg-[#fcf2e8] text-[#0c0a09] text-xs font-['Inter'] font-medium border border-[#eaddcf] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Price Breakdown Banner */}
                <div className="p-5 rounded-2xl bg-[#fcf2e8] border border-[#eaddcf] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#57534e]">
                      Total Payable Today:
                    </span>
                    <span className="font-['Inter'] text-[11px] text-[#78716c]">
                      {paymentType === "deposit"
                        ? `10% deposit of ₹${totalFee.toLocaleString("en-IN")}`
                        : "100% upfront settlement"}
                    </span>
                  </div>
                  <div className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#ee8733]">
                    ₹{dueToday.toLocaleString("en-IN")}
                  </div>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit / Pay CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#ffffff] bg-[#ee8733] orange-glow flex items-center justify-center gap-2 hover:bg-[#ff6a1a] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Connecting to Razorpay...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 stroke-[2.5]" />
                      <span>
                        Pay ₹{dueToday.toLocaleString("en-IN")} via Razorpay (UPI / Cards / NetBanking)
                      </span>
                    </>
                  )}
                </button>

                {/* Trust Footer */}
                <div className="flex items-center justify-center gap-2 text-[#78716c] font-['Inter'] text-[11px] text-center font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#ee8733] shrink-0" />
                  <span>
                    Secured by Razorpay • 256-Bit SSL Encrypted • Instant Booking Invoice
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
