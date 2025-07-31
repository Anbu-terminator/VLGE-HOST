import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Download, CheckCircle, AlertCircle } from "lucide-react";
import type { StudentVerification, VerifyStudentRequest } from "@shared/schema";
import { generateCertificatePDF } from "@/lib/pdf-generator";

export default function StudentVerification() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState<StudentVerification | null>(null);
  const { toast } = useToast();

  const verifyMutation = useMutation({
    mutationFn: async (data: VerifyStudentRequest) => {
      const response = await apiRequest("POST", "/api/verify-student", data);
      return response.json();
    },
    onSuccess: (data: StudentVerification) => {
      setVerificationResult(data);
      toast({
        title: "Certificate Verified Successfully!",
        description: "Your certificate details have been found and verified.",
      });
    },
    onError: (error: any) => {
      setVerificationResult(null);
      toast({
        title: "Verification Failed",
        description: error.message || "Certificate not found. Please check your certificate number.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateNumber.trim()) {
      toast({
        title: "Invalid Input",
        description: "Please enter a certificate number.",
        variant: "destructive",
      });
      return;
    }
    verifyMutation.mutate({ certificateNumber: certificateNumber.trim() });
  };

  const handleDownloadPDF = async () => {
    if (!verificationResult) return;
    
    try {
      await generateCertificatePDF({
        student: verificationResult,
        companyInfo: {
          name: "VLGE Institute Private Limited",
          logo: "/vlge-logo.png", // Placeholder for logo
          address: "123 Education Street, Tech City, India 560001",
          phone: "+91-9876543210",
          email: "info@vlgeinstitute.com"
        }
      });
      
      toast({
        title: "PDF Downloaded Successfully!",
        description: "Your certificate verification PDF has been downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold vlge-primary mb-4">Student Verification</h1>
            <p className="text-xl text-gray-600">Verify your certificate authenticity</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideInLeft" delay={0.2}>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl vlge-secondary">Certificate Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="verification-form">
                <div>
                  <Label htmlFor="certificate-number" className="text-sm font-semibold text-gray-700 mb-2">
                    Certificate Number
                  </Label>
                  <Input
                    id="certificate-number"
                    type="text"
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    placeholder="Enter your certificate number (e.g., VLGE2024001)"
                    className="w-full"
                    required
                    data-testid="input-certificate-number"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-vlge-primary hover:bg-red-600 text-white"
                  disabled={verifyMutation.isPending}
                  data-testid="button-verify-certificate"
                >
                  {verifyMutation.isPending ? "Verifying..." : "Verify Certificate"}
                </Button>
              </form>

              {/* Verification Results */}
              {verificationResult && (
                <AnimatedSection animation="fadeInUp" delay={0.1}>
                  <Alert className="mt-8 border-green-200 bg-green-50" data-testid="verification-results">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-green-800">Certificate Verified ✓</h3>
                        <Button
                          onClick={handleDownloadPDF}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          data-testid="button-download-pdf"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Student Name:</strong> 
                          <span className="ml-2" data-testid="text-student-name">{verificationResult.studentName}</span>
                        </div>
                        <div>
                          <strong>Registration Number:</strong> 
                          <span className="ml-2" data-testid="text-registration-number">{verificationResult.registrationNumber}</span>
                        </div>
                        <div>
                          <strong>College:</strong> 
                          <span className="ml-2" data-testid="text-college">{verificationResult.college}</span>
                        </div>
                        <div>
                          <strong>Date of Joining:</strong> 
                          <span className="ml-2" data-testid="text-date-joining">{verificationResult.dateOfJoining}</span>
                        </div>
                        <div>
                          <strong>Date of Issue:</strong> 
                          <span className="ml-2" data-testid="text-date-issue">{verificationResult.dateOfIssue}</span>
                        </div>
                        <div>
                          <strong>Domain:</strong> 
                          <span className="ml-2" data-testid="text-domain">{verificationResult.domain}</span>
                        </div>
                        <div>
                          <strong>Status:</strong> 
                          <span className="ml-2" data-testid="text-status">{verificationResult.status}</span>
                        </div>
                        <div>
                          <strong>Grade:</strong> 
                          <span className="ml-2" data-testid="text-grade">{verificationResult.grade}</span>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                </AnimatedSection>
              )}

              {/* Sample Certificate Numbers for Testing */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2"></h4>
                <div className="text-sm text-gray-600 space-y-1">
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
