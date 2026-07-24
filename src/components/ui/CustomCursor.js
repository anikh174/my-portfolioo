"use client";

import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly via CSS
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onMouseEnterInteractive = () => document.body.classList.add("cursor-hover");
    const onMouseLeaveInteractive = () => document.body.classList.remove("cursor-hover");

    // Smooth ring follow with lerp
    const animate = () => {
      const lerp = 0.15;
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    // Attach hover listeners to all interactive elements
    const attachHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, label").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };

    // Also observe DOM changes to catch dynamically added elements
    const observer = new MutationObserver(attachHoverListeners);

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);
    attachHoverListeners();
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, label").forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
