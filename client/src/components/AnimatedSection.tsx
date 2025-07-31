import { useEffect, useRef, ReactNode } from "react";
import { useGSAP } from "@/hooks/use-gsap";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "fadeIn" | "scaleIn";
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { context } = useGSAP((ctx) => {
    if (!sectionRef.current) return;

    const animations = {
      fadeInUp: { y: 50, opacity: 0 },
      slideInLeft: { x: -50, opacity: 0 },
      slideInRight: { x: 50, opacity: 0 },
      fadeIn: { opacity: 0 },
      scaleIn: { scale: 0.8, opacity: 0 },
    };

    const fromProps = animations[animation];

    // Create scroll trigger animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            import("gsap").then(({ gsap }) => {
              gsap.from(entry.target, {
                ...fromProps,
                duration: 0.8,
                delay,
                ease: "power3.out",
              });
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  });

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
