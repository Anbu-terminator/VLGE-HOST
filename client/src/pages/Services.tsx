import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "wouter";
import { useGSAP } from "@/hooks/use-gsap";
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Globe, 
  CheckCircle,
  FileText,
  Presentation,
  Download,
  Settings,
  Users,
  Award
} from "lucide-react";

export default function Services() {
  const finalYearServices = [
    { icon: FileText, title: "Project Abstract", description: "Comprehensive project documentation" },
    { icon: FileText, title: "IEEE Base Paper", description: "Reference papers and research materials" },
    { icon: Presentation, title: "Project Presentation (PPT)", description: "Professional presentation materials" },
    { icon: FileText, title: "Project Report & Documentation", description: "Complete project documentation" },
    { icon: Code, title: "Project Source Code", description: "Full source code with comments" },
    { icon: Settings, title: "Installation Guidance", description: "Step-by-step setup instructions" },
    { icon: CheckCircle, title: "Execution Support", description: "Runtime and deployment support" },
    { icon: Download, title: "Prototype Kit (Optional)", description: "Hardware components if applicable" },
    { icon: Users, title: "Technology Training", description: "Hands-on technology training" },
    { icon: Award, title: "Project Completion Certificate", description: "Industry-recognized certification" },
  ];

  const techServices = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies",
      technologies: ["React", "Node.js", "Python", "PHP"]
    },
    {
      icon: Smartphone,
      title: "Android & iOS App Development",
      description: "Native and cross-platform mobile applications",
      technologies: ["Flutter", "React Native", "Kotlin", "Swift"]
    },
    {
      icon: Globe,
      title: "Digital Marketing Services",
      description: "SEO, social media marketing, and online advertising",
      technologies: ["Google Ads", "SEO", "Social Media", "Analytics"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design for web and mobile applications",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Database design, optimization, and maintenance",
      technologies: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions for businesses",
      technologies: ["Java", "Python", "C#", ".NET"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold vlge-primary mb-4">Our Services</h1>
              <p className="text-xl text-gray-600">Comprehensive solutions for your academic and professional needs</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Final Year Projects */}
            <AnimatedSection animation="slideInLeft">
              <Card className="h-full shadow-xl bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl vlge-primary flex items-center">
                    <FileText className="mr-3" />
                    Final Year Project Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="Professional business team meeting" 
                    className="rounded-lg mb-6 w-full h-48 object-cover"
                    data-testid="final-year-projects-image"
                  />
                  
                  <p className="text-gray-700 mb-6">
                    We guide and develop real-time academic projects for students from multiple streams including 
                    CSE/IT, ECE/EEE, Mechanical/Civil, and Diploma programs with 100% guidance from concept to viva presentation.
                  </p>
                  
                  <div className="text-sm text-gray-700 mb-6">
                    <p className="font-semibold mb-2">Supported Streams:</p>
                    <ul className="space-y-1 text-sm">
                      <li>🔸 CSE / IT – Web & Mobile App Projects, AI/ML, Data Science</li>
                      <li>🔸 ECE / EEE – Embedded Systems, IoT, Sensor-based Projects</li>
                      <li>🔸 Mechanical / Civil – Design-based, Automation Systems</li>
                      <li>🔸 Diploma & Arts – Multimedia, Business Models, Data Analytics</li>
                    </ul>
                  </div>
                  
                  <Button className="bg-vlge-primary hover:bg-red-600 text-white" data-testid="button-final-year-projects">
                    Learn More About Projects
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Tech Services */}
            <AnimatedSection animation="slideInLeft" delay={0.2}>
              <Card className="h-full shadow-xl bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl vlge-secondary flex items-center">
                    <Code className="mr-3" />
                    Tech Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="Modern technology workspace" 
                    className="rounded-lg mb-6 w-full h-48 object-cover"
                    data-testid="tech-services-image"
                  />
                  
                  <p className="text-gray-700 mb-6">
                    Comprehensive technology solutions including web development, mobile apps, digital marketing, 
                    and cutting-edge AR/VR solutions for students and businesses.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Code className="text-vlge-secondary w-5 h-5" />
                      <span className="text-sm">Web & Mobile Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Palette className="text-vlge-secondary w-5 h-5" />
                      <span className="text-sm">UI/UX Design Services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Database className="text-vlge-secondary w-5 h-5" />
                      <span className="text-sm">Database Management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="text-vlge-secondary w-5 h-5" />
                      <span className="text-sm">AR/VR Solutions</span>
                    </div>
                  </div>
                  
                  <Button className="bg-vlge-secondary hover:bg-teal-700 text-white" data-testid="button-tech-services">
                    Explore Tech Services
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final Year Project Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold vlge-primary mb-4">Final Year Project Package</h2>
              <p className="text-xl text-gray-600">Your All-in-One Solution – from Documentation to Execution and Publication</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="final-year-services-grid">
            {finalYearServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <service.icon className="w-12 h-12 text-vlge-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold vlge-secondary mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This package covers everything from idea to execution, including hardware kit (if applicable). 
                Paper publication and journal-related services are not included in the base package and are charged separately.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold vlge-secondary mb-4">Technology Services</h2>
              <p className="text-xl text-gray-600">Professional IT solutions for students and businesses</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="tech-services-grid">
            {techServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className="w-12 h-12 text-vlge-secondary mb-4" />
                    <h3 className="text-xl font-bold vlge-secondary mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-vlge-primary to-vlge-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold vlge-primary  mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-vlge-secondary/90 mb-8">
              Get in touch with our expert team to discuss your requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact">
              <Button 
                className="bg-white text-vlge-primary hover:bg-gray-100 px-8 py-3 text-lg"
                data-testid="button-get-quote"
              >
                Get Free Quote
              </Button>
               </Link>
               <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-white text-vlge-primary hover:bg-white hover:text-vlge-primary px-8 py-3 text-lg"
                data-testid="button-schedule-consultation"
              >
                Schedule Consultation
              </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
 
               