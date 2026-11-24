"use client";
import { useState } from "react";
import { useStore } from "./store";
import { ItemCard } from "./item-card";
import { EmptyState } from "./ui";
interface ItemListProps {
  mode?: "all" | "saved" | "recent";
}
export function ItemList({ mode = "all" }: ItemListProps) {
  const { items, saved } = useStore();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const filtered = items
    .filter(
      (i) =>
        (mode !== "saved" || saved.includes(i.id)) &&
        (status === "All" || i.status === status) &&
        (category === "All" || i.category === category) &&
        `${i.title} ${i.description} ${i.location}`
          .toLowerCase()
          .includes(query.toLowerCase()),
    )
    .sort((a, b) =>
      sort === "name"
        ? a.title.localeCompare(b.title)
        : b.date.localeCompare(a.date),
    );
  const shown = mode === "recent" ? filtered.slice(0, 4) : filtered;
  return (
    <>
      {mode !== "recent" && (
        <div className="filters">
          <div className="search-wrap">
            <label htmlFor="search" className="sr-only">
              Search items
            </label>
            <span aria-hidden="true">⌕</span>
            <input
              id="search"
              placeholder="Search for a bottle, backpack, keys…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="filter-row">
            <div className="tabs" aria-label="Item status">
              {["All", "Lost", "Found"].map((s) => (
                <button
                  key={s}
                  aria-pressed={status === s}
                  className={s === status ? "selected" : ""}
                  onClick={() => setStatus(s)}
                >
                  {s === "All" ? "All items" : s + " items"}
                </button>
              ))}
            </div>
            <div className="selects">
              <label>
                Category
                <select
                  aria-label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {[
                    "All",
                    "Accessories",
                    "Bags",
                    "Books",
                    "Electronics",
                    "Keys",
                  ].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label>
                Sort by
                <select
                  aria-label="Sort by"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="newest">Newest first</option>
                  <option value="name">Name A–Z</option>
                </select>
              </label>
            </div>
          </div>
          <p className="result-count" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "item" : "items"} to
            explore
          </p>
        </div>
      )}
      {shown.length ? (
        <div className="item-grid">
          {shown.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState
          title={mode === "saved" ? "No saved items yet" : "No matching items"}
          description={
            mode === "saved"
              ? "Tap the heart on an item to keep it here for this session."
              : "Try another search or choose a different filter."
          }
        />
      )}
    </>
  );
}
