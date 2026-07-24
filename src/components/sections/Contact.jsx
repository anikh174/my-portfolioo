"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Facebook, Instagram, CheckCircle } from "lucide-react";
import Toast from "@/components/ui/Toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: "", type: "success" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "9a2fc707-9025-478f-9f67-f6305175054d",
          ...form,
          subject: `Portfolio Message from ${form.name}`,
          to_email: "hossainanik174@gmail.com"
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setToast({ show: true, msg: "Message sent successfully!", type: "success" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      setToast({ show: true, msg: "Failed to send. Try again.", type: "error" });
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full bg-transparent border-b-2 border-foreground/10 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder-transparent peer";

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
            Let&apos;s Create Something Legendary.
          </h2>
          <p className="text-sm text-foreground/40 max-w-lg mx-auto">
            Have a project in mind? Or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-8 rounded-2xl space-y-6"
          >
            <h3 className="text-lg font-bold">Get In Touch</h3>
            <p className="text-sm text-foreground/40 leading-relaxed">
              I&apos;m available for freelance work and full-time positions. Let&apos;s build something great together.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { icon: Mail, label: "Email", value: "hossainanik174@gmail.com" },
                { icon: Phone, label: "Phone", value: "+880 1518953763" },
                { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-0.5">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/25 mb-3">Follow</p>
              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/anikh174" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/anik-hossain174/" },
                  { icon: Facebook, href: "https://www.facebook.com/anik.hossain.174" },
                  { icon: Instagram, href: "https://www.instagram.com/ah_mekail" },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 glass rounded-lg flex items-center justify-center text-foreground/30 hover:text-primary transition-colors">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass p-8 rounded-2xl min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="w-full space-y-7"
                  >
                    {[
                      { name: "name", type: "text", label: "Your Name" },
                      { name: "email", type: "email", label: "Your Email" },
                    ].map(({ name, type, label }) => (
                      <div key={name} className="relative">
                        <input
                          type={type}
                          required
                          placeholder=" "
                          className={inputClass}
                          value={form[name]}
                          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                        />
                        <label className="absolute left-0 top-3 text-sm text-foreground/30 pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px]">
                          {label}
                        </label>
                      </div>
                    ))}

                    <div className="relative">
                      <textarea
                        required
                        rows={4}
                        placeholder=" "
                        className={`${inputClass} resize-none`}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                      <label className="absolute left-0 top-3 text-sm text-foreground/30 pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px]">
                        Your Message
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3.5 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 transition-all text-sm"
                    >
                      {sending ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>Send Message <Send size={15} /></>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-500/15 rounded-full flex items-center justify-center text-green-500 mx-auto mb-5">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-sm text-foreground/40 mb-6 max-w-xs mx-auto">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-xs font-bold text-primary uppercase tracking-widest hover:underline"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <Toast isVisible={toast.show} message={toast.msg} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </section>
  );
};

export default Contact;
