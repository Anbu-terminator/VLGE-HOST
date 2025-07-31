import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { sendEmail } from "@/lib/emailjs";
import { insertContactSubmissionSchema } from "@shared/schema";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

const contactFormSchema = insertContactSubmissionSchema.extend({
  firstName: insertContactSubmissionSchema.shape.firstName.min(2, "First name must be at least 2 characters"),
  lastName: insertContactSubmissionSchema.shape.lastName.min(2, "Last name must be at least 2 characters"),
  email: insertContactSubmissionSchema.shape.email.email("Please enter a valid email address"),
  message: insertContactSubmissionSchema.shape.message.min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    setIsSubmitting(true);
    
    try {
      // Try to send via EmailJS first
      const emailSent = await sendEmail({ ...data, phone: data.phone ?? undefined });
      
      if (emailSent) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. We will get back to you soon.",
        });
      }
      
      // Always save to database regardless of email status
      contactMutation.mutate(data);
      
    } catch (error) {
      // If EmailJS fails, still save to database
      contactMutation.mutate(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamMembers = [
    {
      name: "Mr. Vibinraj M",
      position: "Administrative Officer",
      email: "info@valuelearn.in",
      phone: "+91 77081 15754",
    },
    {
      name: "Mr. Navin Sundar S D",
      position: "Marketing Manager", 
      email: "navinsundar@valuelearn.in",
      phone: "+91 94943 84482",
    },
    {
      name: "Mr. Dayanidhi N",
      position: "Resource Manager",
      email: "support@valuelearn.in",
      phone: "+91 63803 06387",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold vlge-primary mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600">Get in touch with us for any queries or support</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slideInLeft">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl vlge-secondary">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your first name" 
                                  {...field} 
                                  data-testid="input-first-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your last name" 
                                  {...field} 
                                  data-testid="input-last-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="Enter your email address" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                pattern="[0-9]{10}"
                                title="Please enter a 10-digit phone number"
                                required
                                value={field.value ?? ""}
                                onChange={field.onChange}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={5} 
                                placeholder="Tell us about your requirements..." 
                                {...field} 
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button
                        type="submit"
                        className="w-full bg-vlge-primary hover:bg-red-600 text-white"
                        disabled={isSubmitting || contactMutation.isPending}
                        data-testid="button-send-message"
                      >
                        {isSubmitting || contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedSection animation="fadeInUp">
                <img 
                  src="https://i.postimg.cc/PqHBQpgM/5124556.jpg" 
                  alt="Graduation ceremony celebration" 
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                  data-testid="contact-hero-image"
                />
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.2}>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <MapPin className="text-vlge-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold vlge-secondary mb-1">Address</h4>
                      <p className="text-gray-600 text-sm" data-testid="text-address">
                        No 2/216 2D, Sai Baba Nagar, K G Kandigai, Tiruttani TK, 
                        Tiruvallur District, Tamil Nadu - 631209
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone Numbers */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Phone className="text-vlge-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold vlge-secondary mb-1">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a 
                          href="tel:+917708115754" 
                          className="block text-gray-600 text-sm hover:text-vlge-primary transition-colors"
                          data-testid="phone-primary"
                        >
                          +91 77081 15754
                        </a>
                        <a 
                          href="tel:+917540073402" 
                          className="block text-gray-600 text-sm hover:text-vlge-primary transition-colors"
                          data-testid="phone-secondary"
                        >
                          +91 75400 73402
                        </a>
                        <a 
                          href="tel:+919494384482" 
                          className="block text-gray-600 text-sm hover:text-vlge-primary transition-colors"
                          data-testid="phone-tertiary"
                        >
                          +91 94943 84482
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Mail className="text-vlge-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold vlge-secondary mb-1">Email</h4>
                      <div className="space-y-1">
                        <a 
                          href="mailto:info@valuelearn.in" 
                          className="block text-gray-600 text-sm hover:text-vlge-primary transition-colors"
                          data-testid="email-primary"
                        >
                          info@valuelearn.in
                        </a>
                        <a 
                          href="mailto:support@valuelearn.in" 
                          className="block text-gray-600 text-sm hover:text-vlge-primary transition-colors"
                          data-testid="email-support"
                        >
                          support@valuelearn.in
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="flex space-x-4 mt-6">
                    <a
                      href="https://wa.me/9345424497"
                      className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                      data-testid="social-whatsapp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/value.learn.academy/"
                      className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                      data-testid="social-instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/value-learn-academy/"
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      data-testid="social-linkedin"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/valuelearnacademy"
                      className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                      data-testid="social-facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold vlge-primary mb-4">Our Team</h2>
              <p className="text-xl text-gray-600">Meet the professionals behind VLGE Institute</p>
            </div>
          </AnimatedSection>

<div className="grid md:grid-cols-3 gap-8" data-testid="team-members">
  {teamMembers.map((member, index) => (
    <AnimatedSection key={member.name} delay={index * 0.1}>
      <Card className="hover:shadow-lg transition-shadow h-full flex">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center w-full">
          {/* Circle Avatar Placeholder */}
          <div className="w-10 h-10 bg-gradient-to-br from-vlge-primary to-vlge-secondary rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
            <span className="sr-only">{member.name}</span>
          </div>

          <h3 className="text-xl font-bold vlge-secondary mb-1">{member.name}</h3>
          <p className="text-vlge-primary font-semibold mb-3">{member.position}</p>

          <div className="space-y-1 text-sm text-gray-600">
            <a
              href={`mailto:${member.email}`}
              className="block hover:text-vlge-primary transition-colors"
              data-testid={`team-email-${index}`}
            >
              {member.email}
            </a>
            <a
              href={`tel:${member.phone.replace(/\s/g, '')}`}
              className="block hover:text-vlge-primary transition-colors"
              data-testid={`team-phone-${index}`}
            >
              {member.phone}
            </a>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  ))}
</div>

        </div>
      </section>
    </div>
  );
}
