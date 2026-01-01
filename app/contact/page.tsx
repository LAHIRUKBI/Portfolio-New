"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 text-white py-26 px-6 md:px-20">
      {/* Page Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Get in Touch
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 bg-gray-800/40 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-400 mb-8">
            Feel free to reach out using any of the methods below or fill out the form — I'll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-indigo-400 text-xl" />
              <span>lahiruilangasinha@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-indigo-400 text-xl" />
              <span>+94 71 091 0202</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaLocationArrow className="text-indigo-400 text-xl" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>

          <div className="flex space-x-6 mt-6">
            <a
              href="https://github.com/LAHIRUKBI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 text-2xl transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/lahiru-i/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 text-2xl transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/40 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-900/30 border border-green-700 text-green-300'
                  : 'bg-red-900/30 border border-red-700 text-red-300'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label className="block text-sm mb-2 text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-100 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-100 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-100 focus:border-indigo-500 outline-none transition"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg transition font-semibold ${
                isSubmitting
                  ? 'bg-indigo-800 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}