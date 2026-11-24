import type { Metadata } from "next";
import { PageHeading } from "@/components/ui";
import { ItemList } from "@/components/item-list";
export const metadata: Metadata = {
  title: "Saved items",
  description:
    "Items you\u2019ve saved stay here while you browse. This list resets on refresh.",
};
export default function Page() {
  return (
    <div className="container page-section">
      <PageHeading
        eyebrow="YOUR LITTLE SHORTLIST"
        title="Keep an eye on it."
        description="Items you\u2019ve saved stay here while you browse. This list resets on refresh."
      />
      <ItemList mode="saved" />
    </div>
  );
}
