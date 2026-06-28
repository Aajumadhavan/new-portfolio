"use client";

import React, { useState } from "react";
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE", // Set in .env
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(data.message || "Failed to submit the form. Please check your Access Key.");
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-display mb-3">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white">
            Let&apos;s Connect &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Collaborate
            </span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-sm mt-4 leading-relaxed font-sans">
            Have a design project or creative campaign in mind? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-2xl border border-white/10">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-display font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-sans">
                  Reach out directly for freelance design contracts, design audits, or collaboration opportunities.
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-cyan-400">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 font-display block">
                      Email
                    </span>
                    <a
                      href="mailto:stmmadhavaraj07@gmail.com"
                      className="text-white text-xs hover:text-cyan-400 transition-colors font-display font-medium cursor-none"
                    >
                      stmmadhavaraj07@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-cyan-400">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 font-display block">
                      Phone / Mobile
                    </span>
                    <span className="text-white text-xs font-display font-medium">
                      +91 90423 50440
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-cyan-400">
                    <FiLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 font-display block">
                      LinkedIn Profile
                    </span>
                    <a
                      href="https://www.linkedin.com/in/t-s-madhavaraj-stm2000/"
                      target="_blank"
                      className="text-white text-xs hover:text-cyan-400 transition-colors font-display font-medium cursor-none"
                    >
                      linkedin.com/in/t-s-madhavaraj-stm2000
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-cyan-400">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 font-display block">
                      Location
                    </span>
                    <span className="text-white text-xs font-display font-medium">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic disclaimer */}
            <div className="border-t border-white/5 pt-6 mt-8">
              <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                Average reply time is under 12 hours. Look forward to consulting on your design briefs or ad strategy targets.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-center min-h-[450px]">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mb-2 font-display">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/5 border border-white/10 hover:border-white/15 focus:border-cyan-500 rounded-lg p-3 text-xs text-white placeholder-slate-500 outline-none transition-colors cursor-none font-sans"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mb-2 font-display">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/5 border border-white/10 hover:border-white/15 focus:border-cyan-500 rounded-lg p-3 text-xs text-white placeholder-slate-500 outline-none transition-colors cursor-none font-sans"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col">
                    <label className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mb-2 font-display">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/10 hover:border-white/15 focus:border-cyan-500 rounded-lg p-3 text-xs text-white placeholder-slate-500 outline-none transition-colors cursor-none font-sans"
                      placeholder="Ad Account Audit Request"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mb-2 font-display">
                      Message Brief
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/10 hover:border-white/15 focus:border-cyan-500 rounded-lg p-3 text-xs text-white placeholder-slate-500 outline-none transition-colors resize-none cursor-none font-sans"
                      placeholder="Hello, I would like to request a campaign roadmap..."
                    />
                  </div>

                  {/* Error Message */}
                  {errorMessage && (
                    <div className="text-red-400 text-[11px] font-medium font-sans">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 disabled:opacity-50 cursor-none shadow-md shadow-indigo-600/10"
                  >
                    {isSubmitting ? "Submitting Request..." : "Send Message"}
                  </button>
                </motion.form>
              ) : (
                /* Success Layout */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="p-4 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 mb-6"
                  >
                    <FiCheckCircle className="w-12 h-12" />
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-display font-black text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-400 text-xs max-w-sm mb-8 font-sans">
                    Thank you for reaching out. Your brief has been registered. I will respond to your inbox shortly.
                  </p>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-[9px] uppercase font-bold tracking-wider text-white transition-colors cursor-none"
                  >
                    Send another brief
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
