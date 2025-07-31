import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

export function TermsConditions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="header">
        <AccordionTrigger className="text-left">
          📜 Terms and Conditions (Last Updated: 30/07/2025)
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 pb-4">
          Welcome to VLGE INSTITUTE PRIVATE LIMITED. These Terms and Conditions govern your use of our website, services, and any associated platforms offered under the names VLGE Ed-Tech, Study Abroad with VLGE, and VLGE Tech Services.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="acceptance">
        <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="services">
        <AccordionTrigger>2. Services Offered</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          We provide:<br/><br/>
          • Ed-Tech courses and training (certification, diploma, and PG diploma)<br/>
          • Study abroad consultation for higher studies (especially in Italy and Europe)<br/>
          • Tech development services (projects, websites, and applications)
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="responsibilities">
        <AccordionTrigger>3. User Responsibilities</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          • You agree to provide accurate and complete information<br/>
          • Maintain confidentiality of login credentials<br/>
          • Misuse may result in account termination
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="payments">
        <AccordionTrigger>4. Payments and Refunds</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          • Full payment required before access<br/>
          • Refunds only for undelivered services
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="ip">
        <AccordionTrigger>5. Intellectual Property</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          All content is proprietary. Reproduction prohibited without consent.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="links">
        <AccordionTrigger>6. Third-Party Links</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Not responsible for external site content
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="warranties">
        <AccordionTrigger>7. Disclaimer of Warranties</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          No guarantees of accuracy/completeness
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="liability">
        <AccordionTrigger>8. Limitation of Liability</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Not liable for damages from service use
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="termination">
        <AccordionTrigger>9. Termination</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          May terminate access for violations
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="law">
        <AccordionTrigger>10. Governing Law</AccordionTrigger>
        <AccordionContent className="text-gray-600">
          Indian law applies, jurisdiction in Tiruvallur District
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}