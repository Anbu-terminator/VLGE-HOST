import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "wouter";
import React, { useEffect, useRef } from "react";
import {
  GraduationCap, Globe, Code, CheckCircle, Users, Award, BookOpen, TrendingUp, BadgeCheck
} from "lucide-react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const icons = {
  Users,
  BookOpen,
  Award,
  Code,
  GraduationCap,
  Globe,
  CheckCircle,
  BadgeCheck
};

export default function Home() {
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const aboutImageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(heroImageRef.current, {
      y: 20,
      scale: 1.02,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(aboutImageRef.current, {
      y: -15,
      rotation: 2,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    const animateCounters = () => {
      milestoneRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const targets = [120, 160, 3, 120];
        const target = targets[index];
        let current = 0;
        const increment = target / 60;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            ref.textContent = Math.floor(current).toString();
            requestAnimationFrame(updateCounter);
          } else {
            ref.textContent = target.toString();
          }
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target);
            }
          });
        });

        observer.observe(ref);
      });
    };

    animateCounters();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white flex items-center overflow-x-hidden">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
      <AnimatedSection animation="fadeInUp">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold vlge-primary mb-4 md:mb-6 leading-tight">
            Transform Your Future with
            <span className="vlge-secondary block">VLGE Institute</span>
          </h1>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Empowering students with quality education, global exposure, and practical skills.
            Your gateway to international opportunities and technological innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/courses">
              <Button className="bg-vlge-primary hover:bg-red-600 text-white px-8 py-4 text-lg">
                Explore Courses
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-vlge-secondary text-vlge-secondary hover:bg-vlge-secondary hover:text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slideInLeft" delay={0.3}>
        <div>
          <img
            ref={heroImageRef}
            src="https://i.postimg.cc/RhtGCcG5/2425515.jpg"
            alt="Modern university campus with students"
            className="rounded-2xl shadow-2xl w-full h-auto"
          />
        </div>
      </AnimatedSection>
    </div>
  </div>
</section>

{/* About Section */}
<section className="py-8 md:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl font-bold vlge-primary mb-4">ABOUT US</h2>
        <div className="w-24 h-1 bg-vlge-primary mx-auto"></div>
      </div>
    </AnimatedSection>

    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
      <AnimatedSection animation="slideInLeft">
        <div>
          <img
            ref={aboutImageRef}
            src="https://i.postimg.cc/vT7HdNJJ/20944343.jpg"
            alt="Students studying technology"
            className="rounded-xl shadow-lg w-full h-auto"
            style={{ animationDuration: '6s', animationIterationCount: 'infinite' }}
          />
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
            VLGE INSTITUTE PRIVATE LIMITED is a dynamic and innovative organization committed to transforming 
            education and technology services. Established with a vision to empower students and institutions, 
            we offer a range of professional solutions under three verticals:
          </p>
          <div className="space-y-4">
            {[
              ["VLGE Institute Private Limited (Ed-Tech):", "Focused on skill development, certification courses, and academic collaborations."],
              ["Study Abroad with VLGE:", "100% support in international education with scholarships and visa processing."],
              ["VLGE Tech Services:", "Final year projects, web development, and IT solutions."]
            ].map(([title, desc], idx) => (
              <div className="flex items-start space-x-3" key={idx}>
                <div className="w-2 h-2 bg-vlge-primary rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>{title}</strong> {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </div>
</section>


          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            <AnimatedSection animation="fadeInUp">
              <Card className="group bg-white border-2 border-vlge-primary/20 hover:shadow-xl hover:border-vlge-primary transition-all duration-300 h-full">
                <CardContent className="p-6 min-h-[260px] md:min-h-[300px] flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold vlge-primary mb-4 md:mb-6 flex items-center">
                    <TrendingUp className="mr-3" />
                    MISSION
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-vlge-primary mt-1 w-5 h-5" />
                      <span>Empower students with quality education, global exposure, and practical skills</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-vlge-primary mt-1 w-5 h-5" />
                      <span>Enable smooth access to international universities with scholarship guidance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-vlge-primary mt-1 w-5 h-5" />
                      <span>Deliver innovative tech services for academic and business excellence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <Card className="group bg-white border-2 border-vlge-secondary/20 hover:shadow-xl hover:border-vlge-secondary transition-all duration-300 h-full">
                <CardContent className="p-6 min-h-[320px] flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold vlge-secondary mb-4 md:mb-6 flex items-center">
                    <Globe className="mr-3" />
                    VISION
                  </h3>
                  <p className="text-gray-700 leading-relaxed mt-2 text-base md:text-lg">
                    To become a leading global platform that integrates education, international opportunities,
                    and technological innovation — shaping a future where every student and entrepreneur has
                    the tools, support, and access to succeed in a competitive world.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Our Divisions */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold vlge-primary mb-6">OUR DIVISIONS</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
                {/* Card 1 */}
                <Card className="hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 h-full" onClick={() => window.location.href="/courses"}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="text-vlge-primary text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold vlge-secondary mb-2">VLGE INSTITUTE</h4>
                    <p className="text-sm text-gray-600 mb-2">PRIVATE LIMITED</p>
                    <p className="text-vlge-primary font-semibold">(An Ed-Tech Division)</p>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="hover:shadow-xl transition-shadow cursor-pointer hover:scale-105" onClick={() => window.location.href="/consultancy"}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="text-vlge-secondary text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold vlge-secondary mb-2">STUDY ABROAD</h4>
                    <p className="text-sm text-gray-600 mb-2">WITH VLGE</p>
                    <p className="text-vlge-primary font-semibold">(Educational Consultancy)</p>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="hover:shadow-xl transition-shadow cursor-pointer hover:scale-105" onClick={() => window.location.href="/services"}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="text-vlge-accent text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold vlge-secondary mb-2">VLGE TECH</h4>
                    <p className="text-sm text-gray-600 mb-2">SERVICES</p>
                    <p className="text-vlge-primary font-semibold">(Technology & Innovation)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>

      {/* Why VLGE Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold vlge-primary mb-6">WHY CHOOSE VLGE?</h2>
              <div className="w-24 h-1 bg-vlge-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {([
                ['Expert Instructors', 'Users', 'Training by industry professionals and IIT faculty'],
                ['Learning Options', 'BookOpen', 'Offline & online courses for flexible learning'],
                ['Affordable Education', 'Award', 'High-quality training at reasonable costs'],
                ['Industry Programs', 'Code', 'Curriculum aligned with market demands'],
                ['Hands-on Experience', 'GraduationCap', 'Workshops and internships'],
                ['Flexible Environment', 'Globe', 'Accessible from anywhere'],
                ['Student Support', 'CheckCircle', 'Dedicated faculty assistance'],
                ['Certifications', 'BadgeCheck', 'Govt recognized programs']
              ] as Array<[string, keyof typeof icons, string]>).map(([title, icon, desc], idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-vlge-primary/10 p-3 rounded-lg">
                        {React.createElement(icons[icon], {className: "w-8 h-8 text-vlge-primary"})}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{title}</h4>
                        <p className="text-gray-600 text-sm">{desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-gradient-to-r from-vlge-secondary to-vlge-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center vlge-primary mb-12">OUR MILESTONES</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center" data-testid="milestone-courses">
                <div 
                  className="text-5xl font-bold vlge-primary mb-2" 
                  ref={(el) => milestoneRefs.current[0] = el}
                >
                  0
                </div>
                <p className="text-xl font-bold vlge-secondary mb-2">TOTAL COURSES</p>
              </div>
              <div className="text-center" data-testid="milestone-registrations">
                <div 
                  className="text-5xl font-bold vlge-primary mb-2"
                  ref={(el) => milestoneRefs.current[1] = el}
                >
                  0
                </div>
                <p className="text-xl font-bold vlge-secondary mb-2">REGISTRATIONS</p>
              </div>
              <div className="text-center" data-testid="milestone-tieups">
                <div 
                  className="text-5xl font-bold vlge-primary mb-2"
                  ref={(el) => milestoneRefs.current[2] = el}
                >
                  0
                </div>
                <p className="text-xl font-bold vlge-secondary mb-2">TIE UPS</p>
              </div>
              <div className="text-center" data-testid="milestone-learners">
                <div 
                  className="text-5xl font-bold vlge-primary mb-2"
                  ref={(el) => milestoneRefs.current[3] = el}
                >
                  0
                </div>
                <p className="text-xl font-bold vlge-secondary mb-2">SATISFIED LEARNERS</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Approvals & Registrations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center vlge-primary mb-12">
              REGISTERED AND APPROVED BY
            </h2>
            <div className="overflow-hidden">
              <div className="flex space-x-12 animate-marquee" data-testid="approvals-carousel">
                <img src="https://i.postimg.cc/V5QqCfXT/1000241419-removebg-preview.png" alt="AICTE" className="h-24 w-48 object-contain px-4" />

                <img src="https://i.postimg.cc/C5Z78rXZ/1000241422-removebg-preview.png" alt="DPIIT" className="h-24 w-48 object-contain px-4" />

                <img src="https://i.postimg.cc/RZ1RwHsT/1000241423-removebg-preview.png" alt="EGAC" className="h-24 w-48 object-contain px-4" />

                <img src="https://i.postimg.cc/rstGs0Rx/1000241424-removebg-preview.png" alt="IAF" className="h-24 w-48 object-contain px-4" />

                <img src="https://i.postimg.cc/1zJrjZZn/1000241425-removebg-preview.png" alt="MCA" className="h-24 w-48 object-contain px-4" />

                <img src="https://i.postimg.cc/rpcfHJ0b/1000241426-removebg-preview.png" alt="MSME" className="h-24 w-48 object-contain px-4" />
                <img src="https://i.postimg.cc/XqT8kc6s/aicte.png" alt="National Internship" className="h-24 w-48 object-contain px-4" />
                <img src="https://i.postimg.cc/jdpgHKsR/DPIIT.png" alt="Startup India" className="h-24 w-48 object-contain px-4" />
                <img src="https://i.postimg.cc/Mp1st4TV/tnstart-jpeg.jpg" alt="Startup TN" className="h-24 w-48 object-contain px-4" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

