import { useEffect } from 'react';
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  GraduationCap, 
  DollarSign, 
  Clock, 
  FileText, 
  Globe, 
  Award,
  Users,
  MapPin,
  Calendar,
  BookOpen,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";
import { useGSAP } from "@/hooks/use-gsap";

interface BaseCountryData {
  flag: string;
  name: string;
  description: string;
  features: string[];
  universities?: string[];
  costs: {
    tuitionMin: string;
    tuitionMax: string;
    livingCost: string;
  };
  duration: {
    bachelor: string;
    master: string;
    phd: string;
  };
}

interface ItalyCountryData extends BaseCountryData {
  detailedInfo: {
    academicSystem: {
      title: string;
      content: string;
    };
    costs: {
      title: string;
      tuitionFees: string;
      livingCosts: string;
    };
    admissionRequirements: {
      title: string;
      general: string;
      language: string;
    };
    applicationProcess: {
      title: string;
      platforms: string;
      deadlines: string;
      fees: string;
    };
  };
  topUniversities: string[];
  scholarships: string[];
  studentLife: string[];
}

export default function CountryPage() {
  const [, params] = useRoute("/country/:countryName");
  const countryName = params?.countryName || "";

  // Country-specific data - focusing on Italy as per requirements
  const getCountryData = (country: string): BaseCountryData | ItalyCountryData => {
    const baseData = {
      flag: "🇪🇺",
      name: "European Country",
      description: "Study in one of Europe's finest educational destinations with world-class universities and rich cultural heritage.",
      features: [
        "Quality Education System",
        "Affordable Tuition Fees", 
        "Cultural Diversity",
        "Career Opportunities"
      ],
      universities: ["Public Universities", "Private Institutions", "Technical Schools"],
      costs: {
        tuitionMin: "€1,000",
        tuitionMax: "€4,000",
        livingCost: "€800-€1,100"
      },
      duration: {
        bachelor: "3 years",
        master: "2 years",
        phd: "3-4 years"
      }
    };

    if (country === "italy") {
      return {
        ...baseData,
        flag: "🇮🇹",
        name: "Italy",
        description: "Your Pathway to World-Class Education in Italy. Study in one of Europe's most prestigious educational destinations with rich history, culture, and excellent universities.",
        features: [
          "Italy’s historic treasures and magnificent cuisine continue to draw visitors as they have done for centuries. From the snow-capped Dolomites in the North to the warm maritime Mediterranean culture of the South, Italy’s regions are diverse and exciting. For the international student seeking world-class but affordable education, with a wide range of social and leisure activities, few countries are as exciting a choice as Italy.",
          "The country’s cultural importance extends back to ancient times and the past greets the student of history and archaeology on every street corner. For many, Rome is still the Eternal City, the centre of an empire that - some 2,000 years ago - stretched from rainy Britannia to the deserts of Syria. At its height it also encompassed Egypt, much of North Africa and nearly all of Continental Europe.",
          "Italy’s Ancient Roman monuments, magnificent as they are, tell only part of the story. The Renaissance of the 14th to 17th century originated in Italy (as the Rinascimento) and sparked innovation and revolutions in art, architecture, philosophy, religion and the sciences across Europe. Intellectual activity and creativity flourished, carrying gems of ancient and medieval thought into the modern world.",
          "Italy offers a warm, welcoming culture where locals quickly become friends, and food is central to daily life. Dining out and savoring healthy, high-quality meals is a key part of experiencing la dolce vita.",
          "Italy offers a rich academic legacy, with the University of Bologna—founded in 1088—being the world's oldest. The Bologna Process, initiated there, shaped academic excellence across Europe. Italian universities blend heritage with innovation, offering world-class education.",
          "Modern institutions like the University of Rome Tor Vergata and SDA Bocconi in Milan provide top-ranked English-taught programs. With over 500 English degrees available, Italy is rapidly expanding its international focus, attracting students with high satisfaction and strong career outcomes."
        ],
        detailedInfo: {
          academicSystem: {
            title: "Academic System Overview",
            content: "Italy follows the Bologna Process with a 3-cycle system: Bachelor's (Laurea Triennale) - 3 years, 180 ECTS credits; Master's (Laurea Magistrale) - 2 years, 120 ECTS credits; Doctorate (Dottorato) - 3-4 years. Single-cycle programs available for Medicine, Law, and Architecture (5-6 years)."
          },
          costs: {
            title: "Costs & Affordability",
            tuitionFees: "Public universities: €1,000-€4,000/year (avg. €1,000), Private universities: €3,000-€35,000/year",
            livingCosts: "Monthly budget: €800-€1,100, Accommodation: €200-€600/month. Major cities (Rome/Milan) have higher costs, smaller cities are much more affordable."
          },
          admissionRequirements: {
            title: "Admission Requirements",
            general: "Minimum age: 17 years, High school: 12 years of education completed, Master's: Relevant bachelor's degree (15+ years education), Valid passport",
            language: "For English programs: IELTS/TOEFL (typically B2 level/6.0+ IELTS). For Italian programs: Italian proficiency B1-B2 level required."
          },
          applicationProcess: {
            title: "Application Process",
            platforms: "Universitaly (central government portal) and individual university portals",
            deadlines: "Undergraduate: January-February (first session), July-August (second session). Master's: April-July typically",
            fees: "~€15 for up to 2 applications"
          }
        },
        topUniversities: [
          
  "Accademia Costume & Moda (fashion and design-focused institute in Rome)",
  "American University of Rome (liberal arts university, US-accredited)",
  "Ca' Foscari University of Venice (renowned for economics, languages, and humanities)",
  "Domus Academy (top-ranked postgraduate design and fashion school in Milan)",
  "ESCP Business School (international business school with a campus in Turin)",
  "Global Campus of Human Rights (European interdisciplinary human rights education hub)",
  "Istituto Marangoni International (prestigious fashion and design school)",
  "Luiss University (elite private university for politics, law, and economics)",
  "LUMSA University (private Catholic university with focus on social sciences)",
  "Parthenope University of Naples (known for economics and maritime studies)",
  "Polimoda (leading fashion school based in Florence)",
  "Politecnico di Milano (top engineering, architecture, and design university)",
  "Politecnico di Torino (prestigious for engineering and technology)",
  "Rome Business School (international business education, MBA and masters)",
  "Sant’Anna School of Advanced Studies (elite public research university in Pisa)",
  "Sapienza University of Rome (112,500 students, 8,300 international)",
  "SDA Bocconi School of Management (prestigious business school in Milan)",
  "Università Iuav di Venezia (specialized in architecture, design, and urban planning)",
  "Università IULM (focus on communication, media, and languages in Milan)",
  "University of Bologna (oldest university in world, 1088)",
  "University of Florence (leading research university in Tuscany)",
  "University of Milan (largest university in Milan, wide academic offerings)",
  "University of Naples Federico II (oldest public university in Europe, 1224)",
  "University of Padua (historic university, strong in science and engineering)",
  "University of Pavia (one of Europe’s oldest, strong research traditions)",
  "University of Pisa (Galileo's alma mater)",
  "University of Rome Tor Vergata (modern university, strong international programs)",
  "University of Trento (research-focused, high academic rankings)",
  "University of Trieste (known for science and international collaboration)",
  "University of Turin (one of Italy’s oldest, broad academic disciplines)",
  "University of Verona (strong in economics, law, and humanities)",
  "Vita-Salute San Raffaele University (top medical and psychology programs in Milan)"
 
          
        ],
        scholarships: [
          "DSU scholarships (need-based, all nationalities)",
          "University of Bologna: Up to $1,808 USD discount",
          "Polytechnic Milan: Excellence awards, STEM female scholarships",
          "Government scholarships available"
          
        ],
        studentLife: [
          "Bologna: Major student city, vibrant atmosphere",
          "Rome: Capital, rich history and culture",
          "Milan: Fashion/business hub, top technical universities",
          "Florence: Art and culture center",
          "Mediterranean climate with regional diversity"
        ]
      };
    }

    // Other countries can be added here with specific data
    const countryFlags: { [key: string]: string } = {
      germany: "🇩🇪",
      france: "🇫🇷", 
      spain: "🇪🇸",
      netherlands: "🇳🇱",
      austria: "🇦🇹",
      belgium: "🇧🇪",
      denmark: "🇩🇰",
      finland: "🇫🇮",
      sweden: "🇸🇪",
      norway: "🇳🇴",
      switzerland: "🇨🇭",
      portugal: "🇵🇹"
    };

    return {
      ...baseData,
      flag: countryFlags[country] || "🇪🇺",
      name: country.charAt(0).toUpperCase() + country.slice(1).replace("-", " ")
    };
  };

  const countryData = getCountryData(countryName);
  const { gsap } = useGSAP();

  useEffect(() => {
    if (countryName === 'italy' && gsap) {
      gsap.fromTo('.italy-image',
        { scale: 0.98, rotation: -0.5 },
        {
          scale: 1.02,
          rotation: 0.5,
          duration: 8,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut"
        }
      );
    }
  }, [gsap, countryName]);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center mb-8">
              <Link href="/consultancy">
                <Button variant="ghost" className="mr-4" data-testid="button-back-to-consultancy">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Countries
                </Button>
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <div className="relative w-full max-w-4xl mx-auto aspect-video mb-8 overflow-hidden rounded-2xl shadow-xl italy-image">
                <img
                  src="https://i.postimg.cc/ZYMxL0sN/beautiful-aerial-shot-florence-italy-architecture-evening.jpg"
                  alt="Beautiful Italy landscape"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl font-bold vlge-primary mb-4" data-testid="country-title">
                Study in {countryData.name}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {countryData.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center vlge-secondary mb-12">
              Why Study in {countryData.name}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="country-features">
              {countryData.features.map((feature, index) => (
                <AnimatedSection key={feature} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <CheckCircle className="w-12 h-12 text-vlge-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold vlge-secondary">{feature}</h3>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Information for Italy */}
      {countryName === "italy" && 'detailedInfo' in countryData && (
        <>
          {/* Academic System */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <AnimatedSection animation="slideInLeft">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center vlge-primary">
                        <GraduationCap className="mr-3" />
                        {countryData.detailedInfo.academicSystem.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        {countryData.detailedInfo.academicSystem.content}
                      </p>
                      <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <p className="font-semibold text-sm">Bachelor's</p>
                          <p className="text-xs text-gray-600">3 years</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <p className="font-semibold text-sm">Master's</p>
                          <p className="text-xs text-gray-600">2 years</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                          <p className="font-semibold text-sm">Doctorate</p>
                          <p className="text-xs text-gray-600">3-4 years</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slideInLeft" delay={0.2}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center vlge-primary">
                        <DollarSign className="mr-3" />
                        {countryData.detailedInfo.costs.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold vlge-secondary mb-2">Tuition Fees</h4>
                          <p className="text-gray-700 text-sm">
                            {countryData.detailedInfo.costs.tuitionFees}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold vlge-secondary mb-2">Living Costs</h4>
                          <p className="text-gray-700 text-sm">
                            {countryData.detailedInfo.costs.livingCosts}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-green-50 rounded-lg">
                        <p className="text-green-800 font-semibold text-sm">
                          💡 Tip: Choose smaller cities for significantly lower living costs!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-center vlge-secondary mb-12">
                  Application Process
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center vlge-primary">
                        <FileText className="mr-3" />
                        {countryData.detailedInfo.admissionRequirements.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold vlge-secondary mb-2">General Requirements</h4>
                          <p className="text-gray-700 text-sm">
                            {countryData.detailedInfo.admissionRequirements.general}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold vlge-secondary mb-2">Language Requirements</h4>
                          <p className="text-gray-700 text-sm">
                            {countryData.detailedInfo.admissionRequirements.language}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center vlge-primary">
                        <Calendar className="mr-3" />
                        {countryData.detailedInfo.applicationProcess.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold vlge-secondary mb-2">Platforms</h4>
                          <p className="text-gray-700 text-sm">
                            {countryData.detailedInfo.applicationProcess.platforms}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold vlge-secondary mb-2">Deadlines</h4>  
                          <p className="text-gray-700 text-sm">
                            {countryData.detailedInfo.applicationProcess.deadlines}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold vlge-secondary mb-2">Application Fees</h4>
                          <p className="text-gray-700 text-sm">
                            {countryData.detailedInfo.applicationProcess.fees}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Top Universities */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-center vlge-secondary mb-12">
                  Top Universities in {countryData.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="top-universities">
                  {('topUniversities' in countryData ? countryData.topUniversities : []).map((university: string, index: number) => (
                    <AnimatedSection key={university} delay={index * 0.1}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <GraduationCap className="w-10 h-10 text-vlge-primary mb-4" />
                          <h3 className="font-semibold vlge-secondary mb-2 text-sm leading-tight">
                            {university}
                          </h3>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Scholarships & Student Life */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <AnimatedSection animation="slideInLeft">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center vlge-primary">
                        <Award className="mr-3" />
                        Scholarships & Financial Aid
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {('scholarships' in countryData ? countryData.scholarships : []).map((scholarship: string, index: number) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                            <span className="text-gray-700 text-sm">{scholarship}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slideInLeft" delay={0.2}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center vlge-primary">
                        <MapPin className="mr-3" />
                        Student Life & Cities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {('studentLife' in countryData ? countryData.studentLife : []).map((city: string, index: number) => (
                          <li key={index} className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-vlge-secondary mt-0.5" />
                            <span className="text-gray-700 text-sm">{city}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Cost Overview (for non-Italy countries) */}
      {countryName !== "italy" && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center vlge-secondary mb-12">
                Cost Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <DollarSign className="w-12 h-12 text-vlge-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold vlge-secondary mb-2">Tuition Fees</h3>
                    <p className="text-2xl font-bold text-vlge-primary">
                      {countryData.costs.tuitionMin} - {countryData.costs.tuitionMax}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">per year</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <MapPin className="w-12 h-12 text-vlge-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold vlge-secondary mb-2">Living Costs</h3>
                    <p className="text-2xl font-bold text-vlge-secondary">
                      {countryData.costs.livingCost}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">per month</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold vlge-secondary mb-2">Program Duration</h3>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-green-600">Bachelor: {countryData.duration.bachelor}</p>
                      <p className="text-lg font-semibold text-green-600">Master: {countryData.duration.master}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-vlge-primary to-vlge-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center vlge-primary mb-12">
              Ready to Start Your Journey to {countryData.name}?
            </h2>
            <p className="text-lg font-semibold vlge-secondary">
              Get personalized guidance from our expert consultants and make your dream of studying abroad a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  className="bg-white text-vlge-primary hover:bg-gray-100 px-8 py-3 text-lg"
                  data-testid="button-get-consultation"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/consultancy">
                <Button 
                  variant="outline" 
                  className="bg-white text-vlge-primary hover:bg-gray-100 px-8 py-3 text-lg"
                  data-testid="button-view-other-countries"
                >
                  View Other Countries
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
