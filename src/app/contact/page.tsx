import type { Metadata } from "next";
import { PageHeading } from "@/components/ui";
import { ContactForm } from "@/components/forms";
export const metadata: Metadata = {
  title: "Contact us",
  description: "Have a question about the board? Leave a message below.",
};
export default function Page() {
  return (
    <div className="container page-section">
      <PageHeading
        eyebrow="WE\u2019RE HERE TO HELP"
        title="Let\u2019s talk."
        description="Have a question about the board? Leave a message below."
      />
      <div className="narrow">
        <ContactForm />
      </div>
    </div>
  );
}
