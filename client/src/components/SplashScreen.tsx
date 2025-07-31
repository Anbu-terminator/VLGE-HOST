import { useEffect, useRef } from "react";

export function SplashScreen() {
  const splashRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      try {
        const { gsap } = await import("gsap");
        const timeline = gsap.timeline();

        // Animate logo entrance
        timeline.from(logoRef.current, {
          scale: 0,
          rotation: 360,
          duration: 1,
          ease: "back.out(1.7)",
        });

        // Animate title
        timeline.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.5");

        // Animate progress bar
        timeline.to(progressRef.current, {
          width: "100%",
          duration: 2,
          ease: "power2.out",
        }, "-=0.3");

        // Final fade out
        timeline.to(splashRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
        });

        return () => {
          timeline.kill();
        };
      } catch (error) {
        console.warn("GSAP not available, using CSS animation fallback");
        
        // Fallback CSS animation
        setTimeout(() => {
          if (splashRef.current) {
            splashRef.current.style.opacity = '0';
            splashRef.current.style.transition = 'opacity 0.5s ease';
          }
        }, 3000);
      }
    };

    initAnimation();
  }, []);

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 bg-gradient-to-br from-vlge-primary to-vlge-secondary z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <img
          ref={logoRef}
          src="https://i.postimg.cc/fygFn9nd/VLGE.png"
          alt="VLGE Logo"
          className="w-32 h-32 mx-auto mb-6"
          data-testid="splash-logo"
        />
        <h1
          ref={titleRef}
          className="text-5xl lg:text-6xl font-bold vlge-primary mb-6 leading-tight"
          data-testid="splash-title"
        >
          VLGE Institute
        </h1>
        <div className="w-64 h-2 bg-white/50 rounded-full mx-auto overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-white rounded-full w-0"
            data-testid="splash-progress"
          />
        </div>
        <p className="text-3xl font-bold text-center vlge-secondary mb-12">
          Transforming Education & Technology
        </p>
      </div>
    </div>
  );
}
