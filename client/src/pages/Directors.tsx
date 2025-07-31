import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Directors() {
  const photoRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(() => {
    photoRefs.current.forEach((ref, index) => {
      if (!ref) return;

      gsap.to(ref, {
        y: 15,
        scale: 1.02,
        duration: 4,
        delay: index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });
  }, []);

  const directors = [
    {
      name: "Mr. CHIRANJEEVI C",
      title: "Founder & Head Director",
      quote: `Welcome to VLGE INSTITUTE PRIVATE LIMITED! Our goal is to empower students with global opportunities, practical skills, and tech-driven solutions. Whetheyou're looking to study abroad with scholarships, upskill through Ed-Tech courses, or build final year projects and websites — VLGE is here to guide you every step of the way. We believe in quality, transparency, and student success. Let’s build your future, together.`,
      image: "https://i.postimg.cc/9X1n9JrY/chirn-jpeg.jpg",
      animation: "fadeInUp",
      delay: 0.2
    },
    {
      name: "Ms. SANDHIYA S",
      title: "Co-Founder & Director",
      quote: `Welcome to VLGE INSTITUTE PRIVATE LIMITED, where our commitment to your success is our driving force. We aim to create a learning environment that blends industry expertise with practical skills, ensuring that each of youisfully prepared for the professional world. My focus is to guide every student on their journey toward achievement, confidence, and growth in today’s dynamic landscape. Together, let's build a future driven by knowledge and opportunity.`,
      image: "https://i.postimg.cc/2yj9JBXW/san-1-jpeg.jpg",
      animation: "fadeInUp",
      delay: 0.4
    },
    {
      name: "Mr. VIBINRAJ M",
      title: "Director",
      quote: `At VLGE INSTITUTE PRIVATE LIMITED, our mission is to empower each individual with the tools and knowledge needed for a successful career. We are dedicated to making quality education accessible and meaningful, supporting you in every step of your skill development. As you explore your potential here, we look forward to helping you unlock new pathways and build the foundations of a bright, skilled future.`,
      image: "https://i.postimg.cc/GtMg1hZ5/vibin-jpeg.jpg",
      animation: "fadeInUp",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold vlge-primary mb-4">Leadership & Vision</h1>
            <div className="w-24 h-1 bg-vlge-primary mx-auto" />
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-12">
          {directors.map(({ name, title, quote, image, animation, delay }, i) => (
            <AnimatedSection
              key={name.replace(/\s+/g, '-')}
              animation={animation as "fadeInUp"}
              delay={delay}
            >
              <Card className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  <img
                    ref={(el) => (photoRefs.current[i] = el)}
                    src={image}
                    alt={name}
                    className="w-60 h-60 object-cover rounded-lg shadow-md"
                  />
                </div>
                <CardContent>
                  <h3 className="text-2xl font-bold text-vlge-primary mb-1">{name}</h3>
                  <p className="text-lg text-gray-600 mb-4">{title}</p>
                  <blockquote className="text-gray-700 text-base leading-relaxed border-l-4 border-vlge-primary pl-4 whitespace-pre-line inline-block text-left">
                    "{quote}"
                  </blockquote>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
