import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Clock, Award, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { useGSAP } from "@/hooks/use-gsap";

export default function Courses() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://zfrmz.in/js/forms.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [openDialog, setOpenDialog] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [currentCourse, setCurrentCourse] = useState("");
  const [currentCourseCode, setCurrentCourseCode] = useState("");

  const handleEnrollClick = (containerId: string, courseTitle: string) => {
    setCurrentCourse(courseTitle);
    setOpenDialog(true);
  };
  const certificationCourses = [
    { code: "CWD", title: "Certificate in Web Designing", duration: "1-3 Months" },
    { code: "CJP", title: "Certificate in Java Programming", duration: "1-3 Months" },
    { code: "CPP", title: "Certificate in Python Programming", duration: "1-3 Months" },
    { code: "CDM", title: "Certificate in Digital Marketing", duration: "1-3 Months" },
    { code: "CUI", title: "Certificate in UI/UX Design", duration: "1-3 Months" },
    { code: "CFS", title: "Certificate in Full Stack Development", duration: "1-3 Months" },
    { code: "CCC", title: "Certificate in C & C++ Programming", duration: "1-3 Months" },
    { code: "CGD", title: "Certificate in Graphic Designing", duration: "1-3 Months" },
    { code: "CHN", title: "Certificate in Hardware & Networking", duration: "1-3 Months" },
    { code: "CAE", title: "Certificate in AutoCAD & Engineering Drafting", duration: "1-3 Months" },
    { code: "CCE", title: "Certificate in Communication & English", duration: "1-3 Months" },
    { code: "CSE", title: "Certificate in Software Engineering Basics", duration: "1-3 Months" },
    { code: "CML", title: "Certificate in Machine Learning Basics", duration: "1-3 Months" },
    { code: "CDE", title: "Certificate in Data Entry & MS Office", duration: "1-3 Months" },
    { code: "CVE", title: "Certificate in Video & Promotions", duration: "1-3 Months" },
    { code: "CIP", title: "Certificate in IoT & Arduino Programming", duration: "1-3 Months" },
    { code: "C3D", title: "Certificate in 3D Animation Basics (Blender)", duration: "1-3 Months" },
    { code: "CHK", title: "Certificate in Ethical Hacking Basics", duration: "1-3 Months" },
    { code: "CCS", title: "Certificate in Cyber Security", duration: "1-3 Months" },
    { code: "CRM", title: "Certificate in Reels & Social Media Editing", duration: "1-3 Months" },
    { code: "CSEW", title: "Certificate in SEO & Web Analytics", duration: "1-3 Months" },
    { code: "CDS", title: "Certificate in Data Science for Beginners", duration: "1-3 Months" },
    { code: "CGP", title: "Certificate in Google Ads & Promotions", duration: "1-3 Months" },
  ];

  const diplomaCourses = [
    { code: "DWD", title: "Diploma in Web Development", duration: "4-6 Months" },
    { code: "DJF", title: "Diploma in Java Full Stack", duration: "4-6 Months" },
    { code: "DPF", title: "Diploma in Python Full Stack", duration: "4-6 Months" },
    { code: "DFS", title: "Diploma in Full Stack Development", duration: "4-6 Months" },
    { code: "DDM", title: "Diploma in Digital Marketing", duration: "4-6 Months" },
    { code: "DUI", title: "Diploma in UI/UX Designing", duration: "4-6 Months" },
    { code: "DGD", title: "Diploma in Graphic Design & Visual Media", duration: "4-6 Months" },
    { code: "DAN", title: "Diploma in Animation & Multimedia", duration: "4-6 Months" },
    { code: "DCE", title: "Diploma in Computer Engineering", duration: "4-6 Months" },
    { code: "DHN", title: "Diploma in Hardware & Networking", duration: "4-6 Months" },
    { code: "DER", title: "Diploma in Embedded & Robotics", duration: "4-6 Months" },
    { code: "DIA", title: "Diploma in IoT & Automation", duration: "4-6 Months" },
    { code: "DAD", title: "Diploma in Android App Development", duration: "4-6 Months" },
    { code: "DMD", title: "Diploma in Mobile App Development (Flutter)", duration: "4-6 Months" },
    { code: "DAE", title: "Diploma in AutoCAD & Engineering Design", duration: "4-6 Months" },
    { code: "DAEV", title: "Diploma in AR/VR Development", duration: "4-6 Months" },
    { code: "DCY", title: "Diploma in Cybersecurity", duration: "4-6 Months" },
    { code: "DED", title: "Diploma in Ethical Hacking & Defense", duration: "4-6 Months" },
    { code: "DML", title: "Diploma in Machine Learning", duration: "4-6 Months" },
    { code: "DDS", title: "Diploma in Data Science", duration: "4-6 Months" },
    { code: "DCP", title: "Diploma in Cloud & DevOps", duration: "4-6 Months" },
    { code: "DRE", title: "Diploma in Robotics & Embedded Systems", duration: "4-6 Months" },
    { code: "DAI", title: "Diploma in AI & Applied Technologies", duration: "4-6 Months" },
  ];

  const pgDiplomaCourses = [
    { code: "PGDFS", title: "PG Diploma in Full Stack Software Engineering", duration: "6-12 Months" },
    { code: "PGDUI", title: "PG Diploma in UI/UX & Product Design", duration: "6-12 Months" },
    { code: "PGDML", title: "PG Diploma in Machine Learning & AI", duration: "6-12 Months" },
    { code: "PGDDS", title: "PG Diploma in Data Science & Business Analytics", duration: "6-12 Months" },
    { code: "PGDCD", title: "PG Diploma in Cloud Computing & DevOps", duration: "6-12 Months" },
    { code: "PGDDM", title: "PG Diploma in Digital Marketing", duration: "6-12 Months" },
    { code: "PGDCY", title: "PG Diploma in Cybersecurity & Ethical Hacking", duration: "6-12 Months" },
    { code: "PGDIR", title: "PG Diploma in IoT, Robotics & Automation", duration: "6-12 Months" },
    { code: "PGDAP", title: "PG Diploma in Android & Mobile App Development", duration: "6-12 Months" },
    { code: "PGDWD", title: "PG Diploma in Web Development & Hosting", duration: "6-12 Months" },
    { code: "PGDAR", title: "PG Diploma in Augmented & Virtual Reality", duration: "6-12 Months" },
    { code: "PGDVR", title: "PG Diploma in Video Production & Reels Editing", duration: "6-12 Months" },
    { code: "PGDGD", title: "PG Diploma in Graphic & Motion Design", duration: "6-12 Months" },
    { code: "PGDSE", title: "PG Diploma in Software Engineering", duration: "6-12 Months" },
    { code: "PGDBA", title: "PG Diploma in Business Analytics", duration: "6-12 Months" },
    { code: "PGDAPY", title: "PG Diploma in Applied Python", duration: "6-12 Months" },
    { code: "PGDBD", title: "PG Diploma in Big Data & Hadoop", duration: "6-12 Months" },
    { code: "PGDPM", title: "PG Diploma in Product Management", duration: "6-12 Months" },
    { code: "PGDITM", title: "PG Diploma in IT Management", duration: "6-12 Months" },
    { code: "PGDMKT", title: "PG Diploma in Marketing & Branding", duration: "6-12 Months" },
    { code: "PGDTS", title: "PG Diploma in Tech Start-up & Innovation", duration: "6-12 Months" },
    { code: "PGDEA", title: "PG Diploma in Embedded AI Systems", duration: "6-12 Months" },
    { code: "PGDCS", title: "PG Diploma in Cloud Security", duration: "6-12 Months" },
    { code: "PGDWT", title: "PG Diploma in Web Technologies & App Deployment", duration: "6-12 Months" },
  ];

  

  const renderCourseGrid = (courses: any[], category: string) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <AnimatedSection key={course.code} delay={index * 0.05}>
          <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-vlge-primary border-vlge-primary">
                  {course.code}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {course.duration}
                </Badge>
              </div>
              <CardTitle className="text-lg vlge-secondary leading-tight">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-1" />
                  Certificate Provided
                </div>
                <div
                  onClick={() => handleEnrollClick(`zf_div_${course.code}`, course.title)}
                  className="bg-vlge-primary hover:bg-red-600 text-white p-2 rounded-md text-sm cursor-pointer text-center"
                >
                  Enroll Now
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );

  return (
    <div className="courses-container">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold vlge-primary mb-4">LIST OF PROGRAMS & COURSES</h1>
              <p className="text-xl text-gray-600">Choose from our comprehensive range of certification and diploma programs</p>
              <div className="flex items-center justify-center mt-6 space-x-8">
                <div className="flex items-center text-vlge-secondary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span className="font-semibold">120+ Courses Available</span>
                </div>
                <div className="flex items-center text-vlge-secondary">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Industry Recognized</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Tabs defaultValue="certification" className="w-full">
              <TabsList className="flex md:grid md:grid-cols-3 mb-8 md:mb-12 h-auto p-1 gap-1 md:gap-4 overflow-x-auto scrollbar-hide">
                <TabsTrigger
                  value="certification"
                  className="min-w-[160px] md:min-w-0 text-xs md:text-base px-3 py-2 md:py-3 flex-shrink-0"
                >
                  Certification<br /><span className="text-[9px] md:text-xs">(1–3 Months)</span>
                </TabsTrigger>
                <TabsTrigger
                  value="diploma"
                  className="min-w-[160px] md:min-w-0 text-xs md:text-base px-3 py-2 md:py-3 flex-shrink-0"
                >
                  Diploma<br /><span className="text-[9px] md:text-xs">(4–6 Months)</span>
                </TabsTrigger>
                <TabsTrigger
                  value="pg-diploma"
                  className="min-w-[160px] md:min-w-0 text-xs md:text-base px-3 py-2 md:py-3 flex-shrink-0"
                >
                  PG Diploma<br /><span className="text-[9px] md:text-xs">(6–12 Months)</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="certification">
                <AnimatedSection>
                  <div className="text-center mb-6 md:mb-8 px-2">
                    <h2 className="text-xl md:text-2xl font-bold vlge-secondary mb-2">Certification Courses</h2>
                    <p className="text-gray-600">Short-term courses to boost your skills quickly</p>
                  </div>
                  {renderCourseGrid(certificationCourses, "certification")}
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="diploma">
                <AnimatedSection>
                  <div className="text-center mb-6 md:mb-8 px-2">
                    <h2 className="text-xl md:text-2xl font-bold vlge-secondary mb-2">Diploma Courses</h2>
                    <p className="text-gray-600">Comprehensive programs for deeper learning</p>
                  </div>
                  {renderCourseGrid(diplomaCourses, "diploma")}
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="pg-diploma">
                <AnimatedSection>
                  <div className="text-center mb-6 md:mb-8 px-2">
                    <h2 className="text-xl md:text-2xl font-bold vlge-secondary mb-2">PG Diploma Courses</h2>
                    <p className="text-gray-600">Advanced programs for professional excellence</p>
                  </div>
                  {renderCourseGrid(pgDiplomaCourses, "pg-diploma")}
                </AnimatedSection>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

        {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold vlge-primary mb-4">Why Choose Our Courses?</h2>
              <p className="text-xl text-gray-600">Comprehensive learning experience with industry focus</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-vlge-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold vlge-secondary mb-2">Industry Certified</h3>
                  <p className="text-gray-600 text-sm">All courses provide industry-recognized certificates</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <BookOpen className="w-12 h-12 text-vlge-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold vlge-secondary mb-2">Practical Learning</h3>
                  <p className="text-gray-600 text-sm">Hands-on projects and real-world applications</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-vlge-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold vlge-secondary mb-2">Flexible Duration</h3>
                  <p className="text-gray-600 text-sm">Choose from short-term to comprehensive programs</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <BookOpen className="w-12 h-12 text-vlge-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold vlge-secondary mb-2">Expert Mentors</h3>
                  <p className="text-gray-600 text-sm">Learn from industry professionals and experts</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-vlge-primary to-vlge-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold vlge-primary mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl font-bold vlge-secondary/90 mb-8">Join thousands of students who have transformed their careers with our courses.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
              <Button className="bg-white text-vlge-primary hover:bg-gray-100 px-8 py-3 text-lg">Browse All Courses</Button>
              </Link>
               <Link href="/contact">
              <Button variant="outline" className="border-whitetext-vlge-primary hover:bg-white hover:text-vlge-primary px-8 py-3 text-lg">Contact Course Advisor</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

 {/* Enrollment Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-hidden rounded-2xl p-0 shadow-xl border-0 bg-white animate-fade-in">
          <DialogHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-white">
            <DialogTitle className="text-xl font-semibold">Enroll in {currentCourse}</DialogTitle>
          </DialogHeader>
          {submissionSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-6 py-12">
              <Award className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thank you for enrolling!</h3>
              <p className="text-gray-600">We'll contact you shortly with course details.</p>
            </div>
          ) : (
            <div className="w-full h-[75vh]">
              <iframe
                src={`https://forms.zohopublic.in/infovalue1/form/CourseRegistrationForm/formperma/8-4z4ohuc8Clka-_UEb07pSf8KjBU5V7OAR4DmCsd0M?zf_rszfm=1&Course=${encodeURIComponent(currentCourse)}&Code=${encodeURIComponent(currentCourseCode)}`}
                className="w-full h-full border-none"
                aria-label="Course Registration Form"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}