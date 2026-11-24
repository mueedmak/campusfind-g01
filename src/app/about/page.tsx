import type { Metadata } from "next";
import { PageHeading, InfoCard, ButtonLink } from "@/components/ui";
export const metadata: Metadata = {
  title: "How it works",
  description:
    "Learn how to report, find, and safely return campus belongings with CampusFind.",
};
export default function About() {
  return (
    <div className="container page-section">
      <PageHeading
        eyebrow="A COMMUNITY THAT CARES"
        title="Small acts. Happier campus days."
        description="CampusFind gives misplaced belongings a place to be found. Built by students, for the people we share campus with."
      />
      <div className="steps">
        <InfoCard number="01" title="Browse & search">
          Use keywords, Lost/Found status, and category filters to find relevant
          reports.
        </InfoCard>
        <InfoCard number="02" title="Report an item">
          Add a clear description, date, and location. Your report appears on
          the board immediately.
        </InfoCard>
        <InfoCard number="03" title="Verify & reunite">
          Contact the reporter, verify a distinguishing detail, and meet at the
          campus help desk.
        </InfoCard>
      </div>
      <div className="about-panel">
        <h2>Thoughtful reporting. Safer handovers.</h2>
        <p>
          Don’t publish student IDs, passwords, full card numbers, or private
          contact information. Keep one identifying detail for the owner to
          confirm. Use a public campus location for handovers.
        </p>
        <h3>About this project</h3>
        <p>CS4032 Web Programming · Assignment 3 · Group G01 · BCY-5C.</p>
        <p>Abdul Mueed Malik · Nameer Khan · Inshal Yousaf</p>
        <p>
          This is a frontend demonstration using mock records and React state.
          Reports, saved items, and form confirmations reset on refresh. No
          messages are sent and no real bookings or accounts are created.
        </p>
        <ButtonLink href="/items">Explore the board ↗</ButtonLink>
      </div>
    </div>
  );
}
