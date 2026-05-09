"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Info } from "lucide-react";

const Toast = ({ message, type = "success", isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed bottom-10 right-10 z-[3000]"
        >
          <div className="glass p-4 pr-12 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4 min-w-[300px]">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              type === "success" ? "bg-green-500/20 text-green-500" : 
              type === "error" ? "bg-red-500/20 text-red-500" : "bg-blue-500/20 text-blue-500"
            }`}>
              {type === "success" && <CheckCircle size={20} />}
              {type === "error" && <XCircle size={20} />}
              {type === "info" && <Info size={20} />}
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-widest">{type === "success" ? "Success" : "Notification"}</p>
              <p className="text-xs text-foreground/60">{message}</p>
            </div>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-foreground/20 hover:text-foreground transition-colors"
            >
              <XCircle size={16} />
            </button>
            <div className="absolute bottom-0 left-0 h-1 bg-primary/30 rounded-full animate-progress-bar" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
