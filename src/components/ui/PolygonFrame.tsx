"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";

interface PolygonFrameProps {
  imageSrc?: string;
  size?: number;
  className?: string;
  children?: ReactNode;
  frameWidth?: number;
  overlayColor?: string;
  holeSize?: number;
}

export default function PolygonFrame({
  imageSrc,
  children,
  size = 300,
  className = "",
  frameWidth = 30, // Not used directly, but kept for API compatibility
  overlayColor = "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
  holeSize = 0.4 // Not used directly, but kept for API compatibility
}: PolygonFrameProps) {
  // Polygon shape (octagon)
  const polygonShape = "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)";

  // Calculate inner size for the hole - 60px smaller than the frame
  const innerSize = size - 60;
  const innerOffset = (size - innerSize) / 2;

  // Create CSS variables for the mask
  const cssVars = {
    '--size': `${size}px`,
    '--inner-size': `${innerSize}px`,
    '--inner-offset': `${innerOffset}px`,
    '--overlay-color': overlayColor,
  } as React.CSSProperties;

  return (
    <div className={`relative group ${className}`} style={{ ...cssVars, width: size, height: size }}>
      {/* Background image - shaped as circle */}
      {imageSrc && (
        <div className="absolute z-0 transition-all duration-300" style={{
          top: `${innerOffset}px`,
          left: `${innerOffset}px`,
          width: `${innerSize}px`,
          height: `${innerSize}px`,
          overflow: 'hidden',
          borderRadius: '50%'
        }}>
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt="Profile Image"
              fill
              style={{
                objectFit: 'cover'
              }}
              priority
            />
          </div>
        </div>
      )}

      {/* Outer rotating frame with hole */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            clipPath: polygonShape,
            background: overlayColor,
            opacity: 0.85,
            // This creates a circular hole in the middle
            maskImage: `radial-gradient(circle at center, transparent 0, transparent calc(var(--inner-size) / 2), black calc(var(--inner-size) / 2))`,
            WebkitMaskImage: `radial-gradient(circle at center, transparent 0, transparent calc(var(--inner-size) / 2), black calc(var(--inner-size) / 2))`,
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
          }}
        />
      </motion.div>

      {/* Children content if no image */}
      {!imageSrc && children && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
