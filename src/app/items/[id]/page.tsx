import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { initialItems } from "@/data/items";
import { ItemDetail } from "@/components/item-detail";
interface DetailPageProps {
  params: Promise<{ id: string }>;
}
export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = initialItems.find((i) => i.id === id);
  return {
    title: item?.title ?? "Item report",
    description: item?.description ?? "View a campus lost and found report.",
  };
}
export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const item = initialItems.find((i) => i.id === id);
  if (!item) notFound();
  return (
    <div className="container page-section">
      <Link href="/items" className="back-link">
        ← Back to the board
      </Link>
      <ItemDetail id={id} initialItem={item} />
    </div>
  );
}
