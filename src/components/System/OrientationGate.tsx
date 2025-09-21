"use client";
import { useEffect, useState } from "react";
import { DeviceMobile, DeviceTablet, ArrowClockwise } from "@phosphor-icons/react";

/**
 * OrientationGate enforces orientation rules on touch devices:
 * - Mobile (coarse pointer, width < 768px): force Portrait
 * - Tablet (coarse pointer, 768px <= width < 1200px): force Landscape
 * Desktop or fine-pointer devices are not restricted.
 *
 * Since the web cannot truly lock orientation in browsers, we overlay
 * a full-screen blocker instructing the user to rotate their device
 * when the current orientation does not match the requirement.
 */
export default function OrientationGate() {
  const [needsRotate, setNeedsRotate] = useState<{
    required?: "portrait" | "landscape";
  }>({});

  useEffect(() => {
    function evaluate() {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      const w = window.innerWidth;

      if (!isCoarse) {
        setNeedsRotate({});
        return;
      }

      // Classify device size buckets for touch devices
      const isMobile = w < 768;
      const isTablet = w >= 768 && w < 1200; // includes many tablets in both orientations

      if (isMobile) {
        // Require portrait on mobile
        if (!isPortrait) {
          setNeedsRotate({ required: "portrait" });
        } else {
          setNeedsRotate({});
        }
        return;
      }

      if (isTablet) {
        // Require landscape on tablets
        if (isPortrait) {
          setNeedsRotate({ required: "landscape" });
        } else {
          setNeedsRotate({});
        }
        return;
      }

      // Larger touch devices (>=1200px) – no enforcement
      setNeedsRotate({});
    }

    // Initial and reactive listeners
    evaluate();
    const onResize = () => evaluate();
    window.addEventListener("resize", onResize);
    // Some browsers fire orientationchange
    window.addEventListener("orientationchange", onResize as any);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize as any);
    };
  }, []);

  if (!needsRotate.required) return null;

  const isPortraitRequired = needsRotate.required === "portrait";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#212121] text-white h-[var(--app-height,100vh)]"
      role="dialog"
      aria-modal="true"
      aria-label="Orientation required"
    >
      <div className="text-center px-6">
        <div className="flex items-center justify-center gap-3 text-neutral-300">
          {isPortraitRequired ? (
            <DeviceMobile size={28} />
          ) : (
            <DeviceTablet size={28} />
          )}
          <ArrowClockwise size={20} />
        </div>
        <h2 className="mt-4 text-xl font-semibold">
          Please rotate your device
        </h2>
        <p className="mt-2 text-neutral-300 max-w-sm mx-auto">
          {isPortraitRequired
            ? "This site is optimized for portrait orientation on mobile devices."
            : "This site is optimized for landscape orientation on tablets."}
        </p>
      </div>
    </div>
  );
}
