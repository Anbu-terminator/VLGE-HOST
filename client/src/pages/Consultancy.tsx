import { useRef } from "react";
import { useGSAP } from "@/hooks/use-gsap";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountryCard } from "@/components/CountryCard";
import {
  Paintbrush,
  Briefcase,
  Laptop2,
  Hammer,
  Leaf,
  BookOpen,
  Scale,
  Stethoscope,
  FlaskConical,
  Users
} from "lucide-react";

// Helper to get ISO2 code from slug
const countrySlugToISO2: Record<string, string> = {
  italy: "it",
  germany: "de",
  france: "fr",
  spain: "es",
  netherlands: "nl",
  austria: "at",
  belgium: "be",
  denmark: "dk",
  finland: "fi",
  sweden: "se",
  norway: "no",
  switzerland: "ch",
  poland: "pl",
  "czech-republic": "cz",
  hungary: "hu",
  portugal: "pt",
  greece: "gr",
  ireland: "ie",
  croatia: "hr",
  slovenia: "si",
  slovakia: "sk",
  estonia: "ee",
  latvia: "lv",
  lithuania: "lt",
  luxembourg: "lu",
  malta: "mt",
  cyprus: "cy",
  bulgaria: "bg",
  romania: "ro",
  iceland: "is",
  liechtenstein: "li",
  monaco: "mc",
  "san-marino": "sm",
  "vatican-city": "va"
};

export default function Consultancy() {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const flagRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(({ gsap }) => {
    gsap.to(heroImageRef.current, {
      y: 15,
      rotation: -1,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  const europeanCountries = [
    { name: "Italy", slug: "italy" },
    { name: "Germany", slug: "germany" },
    { name: "France", slug: "france" },
    { name: "Spain", slug: "spain" },
    { name: "Netherlands", slug: "netherlands" },
    { name: "Austria", slug: "austria" },
    { name: "Belgium", slug: "belgium" },
    { name: "Denmark", slug: "denmark" },
    { name: "Finland", slug: "finland" },
    { name: "Sweden", slug: "sweden" },
    { name: "Norway", slug: "norway" },
    { name: "Switzerland", slug: "switzerland" },
    { name: "Poland", slug: "poland" },
    { name: "Czech Republic", slug: "czech-republic" },
    { name: "Hungary", slug: "hungary" },
    { name: "Portugal", slug: "portugal" },
    { name: "Greece", slug: "greece" },
    { name: "Ireland", slug: "ireland" },
    { name: "Croatia", slug: "croatia" },
    { name: "Slovenia", slug: "slovenia" },
    { name: "Slovakia", slug: "slovakia" },
    { name: "Estonia", slug: "estonia" },
    { name: "Latvia", slug: "latvia" },
    { name: "Lithuania", slug: "lithuania" },
    { name: "Luxembourg", slug: "luxembourg" },
    { name: "Malta", slug: "malta" },
    { name: "Cyprus", slug: "cyprus" },
    { name: "Bulgaria", slug: "bulgaria" },
    { name: "Romania", slug: "romania" },
    { name: "Iceland", slug: "iceland" },
    { name: "Liechtenstein", slug: "liechtenstein" },
    { name: "Monaco", slug: "monaco" },
    { name: "San Marino", slug: "san-marino" },
    { name: "Vatican City", slug: "vatican-city" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Connect",
      description: "We connect with each student..."
    },
    {
      step: 2,
      title: "Profile Verification",
      description: "We carefully verify the student's..."
    },
    {
      step: 3,
      title: "Course Suggestion",
      description: "Based on Eligibility & Interest"
    },
    {
      step: 4,
      title: "University Selection",
      description: "Once the course is finalized..."
    },
    {
      step: 5,
      title: "Application Process",
      description: "We start the full application process..."
    },
    {
      step: 6,
      title: "Visa & Travel Guidance",
      description: "After receiving admission offers..."
    }
  ];
  const studyAreaRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold vlge-primary mb-4">STUDY ABROAD WITH VLGE</h1>
              <p className="text-xl vlge-secondary">Your Pathway to World-Class Education in Italy</p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="slideInLeft">
              <div>
                <img 
                  ref={heroImageRef}
                  src="https://i.postimg.cc/BQV26htr/8848686.jpg"
                  alt="International students studying together"
                  className="rounded-xl shadow-lg w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We help students pursue higher education in top public universities across Italy with 
                  100% guidance and documentation support.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our focus is on fully funded or low-cost admissions through government/university scholarships.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

<section className="py-20 bg-gradient-to-br from-red-50 to-teal-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection>
      <h2 className="text-3xl font-bold text-center vlge-secondary mb-12">Explore Study Areas</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {([
          ["Study Art, Design & Media", "Art, Design & Media", <Paintbrush size={28} className="text-vlge-primary" />],
          ["Study Business & Management", "Business & Management", <Briefcase size={28} className="text-vlge-primary" />],
          ["Study Computer Science & IT", "Computer Science & IT", <Laptop2 size={28} className="text-vlge-primary" />],
          ["Study Engineering & Technology", "Engineering & Technology", <Hammer size={28} className="text-vlge-primary" />],
          ["Study Environment & Agriculture", "Environment & Agriculture", <Leaf size={28} className="text-vlge-primary" />],
          ["Study Humanities", "Humanities", <BookOpen size={28} className="text-vlge-primary" />],
          ["Study Law", "Law", <Scale size={28} className="text-vlge-primary" />],
          ["Study Medicine & Health", "Medicine & Health", <Stethoscope size={28} className="text-vlge-primary" />],
          ["Study Natural Sciences & Mathematics", "Natural Sciences & Mathematics", <FlaskConical size={28} className="text-vlge-primary" />],
          ["Study Social Sciences", "Social Sciences", <Users size={28} className="text-vlge-primary" />]
        ] as [string, string, JSX.Element][]).map(([title, subtitle, Icon], index) => (
          <AnimatedSection
            key={title}
            animation="fadeInUp"
            delay={index * 0.1}
          >
            <Card
              className="h-full relative overflow-hidden group"
              ref={(el) => studyAreaRefs.current[index] = el}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-vlge-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {Icon}
                    <h3 className="text-xl font-bold vlge-primary transform group-hover:translate-x-2 transition-transform duration-300">
                      {title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {subtitle}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-vlge-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  </div>
</section>


      {/* Countries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold vlge-secondary mb-4">Choose Your Destination</h2>
              <p className="text-xl text-gray-600">Study in 34 European countries with our guidance</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {europeanCountries.map((country, index) => {
                const isoCode = countrySlugToISO2[country.slug];
                const flagUrl = `https://flagcdn.com/w80/${isoCode}.png`;

                return (
                  <AnimatedSection key={country.slug} delay={index * 0.05}>
                    <div
                      ref={(el) => (flagRefs.current[index] = el)}
                      className="relative group"
                      onMouseEnter={() =>
                        gsap.to(flagRefs.current[index], { scale: 1.1, y: -5, duration: 0.3 })
                      }
                      onMouseLeave={() =>
                        gsap.to(flagRefs.current[index], { scale: 1, y: 0, duration: 0.3 })
                      }
                    >
                      <CountryCard
                        {...country}
                        flag={
                          <img
                            src={flagUrl}
                            alt={country.name}
                            className="w-12 h-8 object-cover rounded-sm shadow-md group-hover:shadow-lg transition-shadow"
                          />
                        }
                      />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
