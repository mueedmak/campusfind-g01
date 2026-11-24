import type { Metadata } from "next";
import { PageHeading } from "@/components/ui";
import { ReportForm } from "@/components/forms";
export const metadata: Metadata = {
  title: "Report an item",
  description:
    "Lost something or found something? Share a report with your campus community.",
};
export default function Page() {
  return (
    <div className="container page-section">
      <PageHeading
        eyebrow="LET\u2019S GET IT HOME"
        title="A few details. A big difference."
        description="Lost something or found something? Share a report with your campus community."
      />
      <div className="form-layout">
        <ReportForm campus="G01" />
        <aside className="tips">
          <span>✳</span>
          <h2>A helpful report goes a long way.</h2>
          <p>Be specific about the colour, location, and date.</p>
          <p>Keep sensitive information and one identifying detail private.</p>
          <p>
            For this demo, new items use a placeholder illustration. Reports
            stay available until you refresh.
          </p>
          <p>
            For valuable or sensitive belongings, visit your campus help desk.
          </p>
        </aside>
      </div>
    </div>
  );
}
