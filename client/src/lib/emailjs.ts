// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_1xqdoje",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ykhmala",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "x3chL-7_U_z4JC63t",
};

// Interface for the form data
export interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

// Function to send the email using EmailJS
export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    // Dynamically import emailjs-com to avoid build issues
    const emailjs = await import("@emailjs/browser");

    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,         // used inside message body
      from_email: data.email,                                  // used inside message body
      name: `${data.firstName} ${data.lastName}`,              // used for "From Name" in EmailJS template
      email: data.email,                                       // used for "Reply To"
      phone: data.phone || "Not provided",                     // optional
      message: data.message,                                   // message content
      time: new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }),                                                      // current date/time
      title: "Website Contact Form Submission",                // used in subject
    };

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return true;
  } catch (error) {
    console.error("EmailJS error:", error);
    return false;
  }
}
