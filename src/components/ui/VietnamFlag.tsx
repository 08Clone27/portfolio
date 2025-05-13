"use client";

import { useEffect, useRef } from "react";

interface VietnamFlagProps {
  width: number;
  height: number;
}

export default function VietnamFlag({
  width,
  height,
}: VietnamFlagProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Draw red background (Vietnam flag is red with a yellow star)
    ctx.fillStyle = "#da251d"; // Vietnam flag red
    ctx.fillRect(0, 0, width, height);

    // Draw yellow star in the center
    // Make the star slightly larger to match the image
    const starSize = Math.min(width, height) * 0.35; // Larger star (35% of the smallest dimension)
    drawStar(ctx, width / 2, height / 2, 5, starSize, starSize / 2.5, "#ffff00"); // Vietnam flag yellow
  }, [width, height]);

  // Function to draw a star
  const drawStar = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number,
    color: string
  ) => {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }

    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}
