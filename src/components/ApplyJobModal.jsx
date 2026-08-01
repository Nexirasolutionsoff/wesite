import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Briefcase, CheckCircle2, Upload, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ApplyJobModal({ isOpen, onClose, jobTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    experience: '3-5 years',
    coverLetter: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-white/80 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF758F] to-[#8338EC] flex items-center justify-center text-white shadow-md">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base font-heading">
                  Apply for Position
                </h3>
                <p className="text-xs text-pink-300 font-semibold">{jobTitle || 'Senior Full Stack Engineer'}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                  Application Submitted!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
                  Thank you for applying to <span className="font-semibold text-slate-800">Mantisa Solutions</span>. Our engineering leads will review your application and contact you at <span className="text-pink-600 font-mono font-medium">{formData.email}</span> within 48 hours.
                </p>
                <button onClick={handleReset} className="btn-primary py-2.5 px-6 text-sm">
                  Return to Careers Page
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aditi Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-pink-500/50 focus:outline-none bg-slate-50/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="aditi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-pink-500/50 focus:outline-none bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Relevant Experience</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-pink-500/50 focus:outline-none bg-slate-50/50"
                    >
                      <option value="1-2 years">1-2 Years</option>
                      <option value="3-5 years">3-5 Years</option>
                      <option value="5+ years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">GitHub / Portfolio URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/yourusername"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-pink-500/50 focus:outline-none bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Why Mantisa Solutions? (Short Note)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what excites you about building high-scale digital products in Varanasi..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-pink-500/50 focus:outline-none bg-slate-50/50 resize-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-200/50 text-xs text-slate-600 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-500 shrink-0" />
                  <span>Remote & Hybrid Varanasi office options with competitive equity.</span>
                </div>

                <div className="flex items-center justify-end gap-3 mt-2">
                  <button type="button" onClick={onClose} className="btn-secondary text-xs !py-2.5 !px-5">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary text-xs !py-2.5 !px-6">
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
