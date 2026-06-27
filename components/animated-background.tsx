"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-mesh-grid subtle-grid" />
      <motion.div
        className="absolute left-[8%] top-[10%] h-64 w-64 rounded-full bg-cyan-200/45 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, 28, 0], y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[4%] right-[8%] h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, -24, 0], y: [0, -22, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(8,145,178,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.25),#ffffff_88%)]" />
    </div>
  );
}
