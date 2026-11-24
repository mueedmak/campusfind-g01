import type { Metadata } from "next";
import Link from "next/link";
import { ItemDetail } from "@/components/item-detail";
export const metadata: Metadata = {
  title: "Your session report",
  description: "Details of an item reported during this browsing session.",
};
interface SessionReportProps {
  params: Promise<{ id: string }>;
}
export default async function SessionReport({ params }: SessionReportProps) {
  const { id } = await params;
  return (
    <div className="container page-section">
      <Link className="back-link" href="/items">
        Back to the board
      </Link>
      <ItemDetail id={id} />
    </div>
  );
}
