"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

type DrawingType = "drawOnHold" | "drawAlways";

interface Props {
  children?: React.ReactNode;
  strokeColor?: string;
  strokeWidth?: number;
  type: DrawingType;
  followEffect?: boolean;
}

const DrawingCursorEffect: React.FC<Props> = ({
  children,
  strokeColor = "#FF9900",
  strokeWidth = 10,
  type = "drawAlways",
  followEffect = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const isDrawing = useRef(false);
  const last = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const svgNS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(svgNS, "svg");
    svg.classList.add("absolute", "top-0", "left-0", "w-full", "h-full", "pointer-events-none");
    el.appendChild(svg);
    svgRef.current = svg;

    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", `${x1}`);
      line.setAttribute("y1", `${y1}`);
      line.setAttribute("x2", `${x2}`);
      line.setAttribute("y2", `${y2}`);
      line.setAttribute("stroke", strokeColor);
      line.setAttribute("stroke-width", `${strokeWidth}`);
      line.setAttribute("stroke-linecap", "round");
      svg.appendChild(line);

      if (followEffect) {
        gsap.to(line, {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          onComplete: () => line.remove(),
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (type === "drawOnHold" && !isDrawing.current) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (last.current.x != null && last.current.y != null) {
        drawLine(last.current.x, last.current.y, x, y);
      }

      last.current = { x, y };
    };

    const onMouseDown = () => {
      if (type === "drawOnHold") isDrawing.current = true;
    };

    const onMouseUp = () => {
      if (type === "drawOnHold") isDrawing.current = false;
    };

    const onMouseLeave = () => {
      last.current = { x: null, y: null };
      isDrawing.current = false;
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseLeave);
      svg.remove();
    };
  }, [strokeColor, strokeWidth, type, followEffect]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[50vh] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">{children}</div>
    </div>
  );
};

export default DrawingCursorEffect;
