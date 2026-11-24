import type { Metadata } from "next";
import { PageHeading } from "@/components/ui";
import { ItemList } from "@/components/item-list";
export const metadata: Metadata = {
  title: "The item board",
  description:
    "Search by item, location, or keyword. Filter the board to narrow things down.",
};
export default function Page() {
  return (
    <div className="container page-section">
      <PageHeading
        eyebrow="BROWSE THE BOARD"
        title="A missing piece might be right here."
        description="Search by item, location, or keyword. Filter the board to narrow things down."
      />
      <ItemList />
    </div>
  );
}
