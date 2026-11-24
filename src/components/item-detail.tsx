"use client";
import Image from "next/image";
import type { CampusItem } from "@/data/items";
import { useStore } from "./store";
import { StatusBadge } from "./ui";
import { ContactForm } from "./forms";
interface ItemDetailProps {
  id: string;
  initialItem?: CampusItem;
}
export function ItemDetail({ id, initialItem }: ItemDetailProps) {
  const { items, saved, toggleSaved } = useStore();
  const item = items.find((i) => i.id === id) ?? initialItem;
  if (!item)
    return (
      <div className="empty">
        <h1>Report unavailable</h1>
        <p>
          Session reports reset when the page refreshes. Browse the board to
          find current reports.
        </p>
      </div>
    );
  return (
    <>
      <div className="detail-grid">
        <div className="detail-image">
          <Image
            src={item.image}
            alt={item.title}
            width={640}
            height={560}
            priority
          />
        </div>
        <div>
          <StatusBadge status={item.status} />
          <p className="eyebrow detail-category">{item.category}</p>
          <h1>{item.title}</h1>
          <p className="detail-description">{item.description}</p>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>{item.location}</dd>
            </div>
            <div>
              <dt>Reported date</dt>
              <dd>{item.date}</dd>
            </div>
            <div>
              <dt>Report ID</dt>
              <dd>CF-{item.id.slice(0, 8).toUpperCase()}</dd>
            </div>
          </dl>
          <button
            className="button secondary"
            aria-pressed={saved.includes(id)}
            onClick={() => toggleSaved(id)}
          >
            {saved.includes(id) ? "♥ Saved to your list" : "♡ Save this item"}
          </button>
          <p className="fine">
            Meet at the campus help desk and verify ownership before handing
            over an item.
          </p>
        </div>
      </div>
      <div className="narrow detail-form">
        <ContactForm mode="claim" itemTitle={item.title} />
      </div>
    </>
  );
}
