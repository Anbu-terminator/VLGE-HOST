import { useEffect, useRef } from "react";

export function useCounterAnimation(target: number, duration: number = 2000) {
  const elementRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounter(element, target, duration);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return elementRef;
}

function animateCounter(element: HTMLElement, target: number, duration: number) {
  const start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOutCubic);
    
    element.textContent = current.toString();
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toString();
    }
  }
  
  requestAnimationFrame(updateCounter);
}

export function useScrollReveal(threshold: number = 0.1) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return elementRef;
}

export function useMarqueeAnimation(speed: number = 30) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const content = container.querySelector('[data-marquee-content]') as HTMLElement;
    if (!content) return;

    // Clone content for seamless loop
    const clone = content.cloneNode(true) as HTMLElement;
    container.appendChild(clone);

    // Set animation duration based on content width and speed
    const contentWidth = content.offsetWidth;
    const animationDuration = contentWidth / speed;

    content.style.animationDuration = `${animationDuration}s`;
    clone.style.animationDuration = `${animationDuration}s`;

    return () => {
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }
    };
  }, [speed]);

  return containerRef;
}

export function useStaggeredAnimation(delay: number = 100) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-fade-in-up");
              }, index * delay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return containerRef;
}

// GSAP integration hook for advanced animations
export function useGSAPAnimation(
  animationFn: (element: HTMLElement) => void,
  dependencies: any[] = []
) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Dynamically import GSAP to avoid SSR issues
    import("gsap").then(({ gsap }) => {
      // Register ScrollTrigger if available
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        animationFn(element);
      }).catch(() => {
        // Fallback without ScrollTrigger
        animationFn(element);
      });
    });
  }, dependencies);

  return elementRef;
}
