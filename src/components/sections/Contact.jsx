"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, MessageSquare, CheckCircle, ExternalLink, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Toast from "@/components/ui/Toast";

const ContactInfo = ({ icon: Icon, title, value }) => (
  <div className="flex items-start gap-6 p-6 glass rounded-3xl border border-white/5 group hover:border-primary/20 transition-all">
    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">{title}</h4>
      <p className="text-lg font-medium">{value}</p>
    </div>
  </div>
);

const Contact = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastConfig, setToastConfig] = useState({ message: "", type: "success" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Web3Forms for more reliable delivery (No backend required)
      // The user needs to replace 'YOUR_ACCESS_KEY_HERE' with a key from web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "9a2fc707-9025-478f-9f67-f6305175054d", 
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
          to_email: "hossainanik174@gmail.com"
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        setToastConfig({ message: "Your message has been sent successfully!", type: "success" });
        setShowToast(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        // Fallback for demo if key is not yet set
        if (formState.name.toLowerCase() === "test") {
          setIsSent(true);
          return;
        }
        throw new Error(data.message || "Failed to send");
      }
    } catch (error) {
      setToastConfig({ message: "Delivery error. Did you add your Access Key?", type: "error" });
      setShowToast(true);
      
      // FOR DEMO: Allow success UI for the user to see the animation
      if (formState.name.toLowerCase() === "test") {
        setIsSent(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/50 max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold"
          >
            {t("contact.subtitle")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-10 rounded-[3rem] border border-white/5 w-82 md:w-full">
              <h3 className="md:text-2xl font-bold mb-8 flex items-center gap-3">
                <MessageSquare className="text-primary" /> {t("contact.get_in_touch")}
              </h3>
              <p className="text-foreground/60 mb-10 leading-relaxed">
                I'm currently available for freelance work and full-time positions. If you have a project that needs some creative magic, feel free to reach out.
              </p>
              
              <div className="space-y-6">
                <ContactInfo icon={Mail} title="Email" value="hossainanik174@gmail.com"/>
                <ContactInfo icon={Phone} title="Phone" value="+880 1518953763" />
                <ContactInfo icon={MapPin} title="Location" value="Dhaka, Bangladesh"/>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10 flex items-center gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">Follow Me:</span>
                <div className="flex gap-4 w-40 md:w-full">
                  <a
                    href="https://github.com/anikh174"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anik-hossain174/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/anik.hossain.174"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/ah_mekail?igsh=aXJ0OWphZDA3MnVw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form with Success Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-82 md:w-full"
          >
            <div className="glass p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="relative">
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b-2 border-white/10 py-3 focus:outline-none focus:border-primary transition-colors peer"
                        placeholder=""
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                      <label className="absolute left-0 top-3 text-foreground/40 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                        {t("contact.name")}
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border-b-2 border-white/10 py-3 focus:outline-none focus:border-primary transition-colors peer"
                        placeholder=" "
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                      <label className="absolute left-0 top-3 text-foreground/40 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                        {t("contact.email")}
                      </label>
                    </div>

                    <div className="relative">
                      <textarea
                        required
                        rows="4"
                        className="w-full bg-transparent border-b-2 border-white/10 py-3 focus:outline-none focus:border-primary transition-colors peer resize-none"
                        placeholder=" "
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                      <label className="absolute left-0 top-3 text-foreground/40 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                        {t("contact.message")}
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all group overflow-hidden relative"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          {t("contact.send")}
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                      className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-8 shadow-[0_0_50px_rgba(34,197,94,0.2)]"
                    >
                      <CheckCircle size={48} />
                    </motion.div>
                    <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
                    <p className="text-foreground/60 max-w-xs mx-auto mb-10 leading-relaxed">
                      Thanks for reaching out! I have received your message and will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSent(false)}
                      className="px-8 py-3 glass rounded-xl border border-white/10 hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-widest text-primary"
                    >
                      Send Another Message
                    </button>
                    
                    {/* Visual Confetti Fragments */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ top: "50%", left: "50%", opacity: 1 }}
                          animate={{ 
                            top: `${Math.random() * 100}%`, 
                            left: `${Math.random() * 100}%`,
                            opacity: 0,
                            scale: Math.random() * 2
                          }}
                          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                          className="absolute w-2 h-2 bg-primary rounded-full blur-[1px]"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <Toast 
        isVisible={showToast} 
        message={toastConfig.message} 
        type={toastConfig.type} 
        onClose={() => setShowToast(false)} 
      />
    </section>
  );
};

export default Contact;
