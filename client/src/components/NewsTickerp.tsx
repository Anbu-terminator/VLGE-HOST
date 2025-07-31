import { useEffect, useRef } from "react";

export function NewsTickerp() {
  const tickerRef = useRef<HTMLDivElement>(null);

  const newsItems = [
    "🎉 New Batch Starting Soon!",
    "💰 50% Off on All Certification Courses", 
    "🌟 100% Placement Assistance Available",
    "📚 Study Abroad Programs Now Open",
    "🚀 Final Year Projects with Industry Mentors",
    "🎓 PG Diploma Programs Available",
    "🌍 Study in 34 European Countries",
    "💼 Industry Expert Mentors Available",
    "🏆 ISO 9001:2015 Certified Institute",
    "📱 Mobile App Development Courses",
    "🤖 AI & Machine Learning Programs",
    "☁️ Cloud Computing Certifications",
  ];

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    // Initialize GSAP animation
    const initAnimation = async () => {
      try {
        const { gsap } = await import("gsap");
        
        const tickerContent = ticker.querySelector('[data-ticker-content]');
        if (!tickerContent) return;

        // Set up infinite scrolling animation
        gsap.set(tickerContent, { x: "100%" });
        
        const animation = gsap.to(tickerContent, {
          x: "-100%",
          duration: 30,
          ease: "none",
          repeat: -1,
        });

        // Pause on hover
        ticker.addEventListener("mouseenter", () => animation.pause());
        ticker.addEventListener("mouseleave", () => animation.resume());

        return () => {
          animation.kill();
        };
      } catch (error) {
        console.warn("GSAP not available, using CSS animation fallback");
      }
    };

    initAnimation();
  }, []);

  return (
    <div 
      ref={tickerRef}
      className="bg-gradient-to-r from-vlge-primary to-vlge-secondary text-white py-4 overflow-hidden relative border-y-2 border-yellow-400 shadow-lg"
      data-testid="news-ticker-premium"
    >
      <div className="absolute inset-0 bg-black/5"></div>
      {/* Breaking News Label */}
      <div className="absolute left-0 top-0 bottom-0 bg-yellow-400 text-black px-4 flex items-center font-bold text-sm z-20">
        🔥 NEWS & UPDATES
      </div>
      <div 
        className="whitespace-nowrap animate-marquee relative z-10 ml-32"
        data-ticker-content
        data-testid="news-ticker-content"
      >
        <span className="text-base font-bold inline-flex items-center space-x-12">
          {newsItems.map((item, index) => (
            <span key={index} className="inline-flex items-center space-x-2">
              <span className="text-yellow-100">{item}</span>
              {index < newsItems.length - 1 && (
                <span className="text-yellow-300 mx-6 text-xl">★</span>
              )}
            </span>
          ))}
        </span>
      </div>
      
      {/* Gradient fade effects */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-vlge-primary to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-vlge-secondary to-transparent pointer-events-none"></div>
      
      {/* Pulse animation indicators */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
