import type { StudentVerification } from "@shared/schema";

export interface PDFGenerationOptions {
  student: StudentVerification;
  companyInfo: {
    name: string;
    logo: string;
    address: string;
    phone: string;
    email: string;
  };
}

export async function generateCertificatePDF(options: PDFGenerationOptions): Promise<void> {
  try {
    // Dynamically import jsPDF to avoid build issues
    const { jsPDF } = await import("jspdf");
    
    const { student, companyInfo } = options;
    const doc = new jsPDF();
    
    // Set company colors
    const primaryColor: [number, number, number] = [217, 54, 71]; // #d93647
    const secondaryColor: [number, number, number] = [0, 77, 94]; // #004d5e
    
    // Add company logo (placeholder for now - would need actual logo processing)
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 30, 'F');
    
    // Company header
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(companyInfo.name, 20, 20);
    
    // Certificate verification title
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("CERTIFICATE VERIFICATION", 105, 50, { align: "center" });
    
    // Verification status
    doc.setFillColor(76, 175, 80); // Green for verified
    doc.rect(20, 60, 170, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("✓ CERTIFICATE VERIFIED", 105, 70, { align: "center" });
    
    // Student details section
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    const startY = 90;
    const lineHeight = 15;
    let currentY = startY;
    
    const details = [
      ["Certificate Number:", student.certificateNumber],
      ["Student Name:", student.studentName],
      ["Registration Number:", student.registrationNumber],
      ["College:", student.college],
      ["Date of Joining:", student.dateOfJoining],
      ["Date of Issue:", student.dateOfIssue],
      ["Domain:", student.domain],
      ["Status:", student.status],
      ["Grade:", student.grade],
    ];
    
    details.forEach(([label, value]) => {
      doc.setFont("helvetica", "bold");
      doc.text(label, 20, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(value, 80, currentY);
      currentY += lineHeight;
    });
    
    // Company footer
    currentY += 30;
    doc.setFillColor(...secondaryColor);
    doc.rect(0, currentY, 210, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(companyInfo.address, 20, currentY + 15);
    doc.text(`Phone: ${companyInfo.phone} | Email: ${companyInfo.email}`, 20, currentY + 25);
    
    // Generated timestamp
    doc.setTextColor(128, 128, 128);
    doc.setFontSize(8);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, currentY + 35);
    
    // Save the PDF
    doc.save(`Certificate_${student.certificateNumber}_${student.studentName.replace(/\s+/g, '_')}.pdf`);
    
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF. Please try again.");
  }
}