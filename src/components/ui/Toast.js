"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const Toast = ({ message, type = "success", isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(onClose, 4000);
      return () => clearTimeout(t);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-6 right-6 z-[3000]"
        >
          <div className="glass px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 min-w-[260px]">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              type === "success" ? "bg-green-500/15 text-green-500" : "bg-red-500/15 text-red-500"
            }`}>
              {type === "success" ? <CheckCircle size={16} /> : <XCircle size={16} />}
            </div>
            <p className="text-sm font-medium flex-1">{message}</p>
            <button onClick={onClose} className="text-foreground/20 hover:text-foreground/60 transition-colors text-xs">
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
