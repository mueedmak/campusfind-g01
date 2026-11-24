"use client";
import Image from "next/image";
import Link from "next/link";
import type { CampusItem } from "@/data/items";
import { useStore } from "./store";
import { StatusBadge } from "./ui";
interface ItemCardProps {
  item: CampusItem;
}
export function ItemCard({ item }: ItemCardProps) {
  const { saved, toggleSaved } = useStore();
  const active = saved.includes(item.id);
  const detailHref = /^\d+$/.test(item.id)
    ? `/items/${item.id}`
    : `/reports/${item.id}`;
  return (
    <article className="item-card min-w-0">
      <div className="item-image">
        <Link href={detailHref} aria-label={`View ${item.title}`}>
          <Image src={item.image} alt={item.title} width={320} height={280} />
        </Link>
        <StatusBadge status={item.status} />
        <button
          className={`save ${active ? "active" : ""}`}
          aria-label={`${active ? "Unsave" : "Save"} ${item.title}`}
          aria-pressed={active}
          onClick={() => toggleSaved(item.id)}
        >
          {active ? "♥" : "♡"}
        </button>
      </div>
      <div className="item-content">
        <span className="category">{item.category}</span>
        <h3>
          <Link href={detailHref}>{item.title}</Link>
        </h3>
        <p className="location">⌖ {item.location}</p>
        <div className="card-bottom">
          <time dateTime={item.date}>
            {new Date(item.date + "T12:00:00").toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
          <Link href={detailHref} aria-label={`Details for ${item.title}`}>
            View details ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
