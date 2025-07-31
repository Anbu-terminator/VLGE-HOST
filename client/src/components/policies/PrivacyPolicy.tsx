import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

export function PrivacyPolicy() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="header">
        <AccordionTrigger className="text-left">
          🔐 Privacy Policy (Last Updated: 30/07/2025)
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pb-4">
          At VLGE INSTITUTE PRIVATE LIMITED, we respect your privacy and are committed to protecting your personal information.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="collection">
        <AccordionTrigger>1. Information We Collect</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          • Personal Info: Name, email, phone, address, academic records (for students)<br/>
          • Usage Data: Website navigation, access logs, and IP address<br/>
          • Payment Data: Billing and transaction details via secure gateways
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="usage">
        <AccordionTrigger>2. How We Use Your Data</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          • Provide educational services<br/>
          • Process study abroad applications<br/>
          • Offer tech support<br/>
          • Communicate updates and certificates
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="sharing">
        <AccordionTrigger>3. Sharing of Information</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          • Partner universities for admissions<br/>
          • Legal requirements<br/>
          • Service providers with NDAs
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="security">
        <AccordionTrigger>4. Data Security</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          We implement standard security practices including encryption, access controls, and regular audits.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="cookies">
        <AccordionTrigger>5. Cookies</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          We use cookies to improve user experience. You can disable them in browser settings.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="rights">
        <AccordionTrigger>6. Your Rights</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          • Access/correct your data<br/>
          • Request deletion (where applicable)<br/>
          • Withdraw marketing consent
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="updates">
        <AccordionTrigger>7. Policy Updates</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          We may update this policy. Changes will be posted on this page.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}