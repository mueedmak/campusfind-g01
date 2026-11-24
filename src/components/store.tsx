"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { initialItems, type CampusItem } from "@/data/items";
interface StoreValue {
  items: CampusItem[];
  saved: string[];
  toggleSaved: (id: string) => void;
  addItem: (item: CampusItem) => void;
}
const Store = createContext<StoreValue | null>(null);
interface StoreProviderProps {
  children: ReactNode;
}
export function StoreProvider({ children }: StoreProviderProps) {
  const [items, setItems] = useState(initialItems);
  const [saved, setSaved] = useState<string[]>([]);
  function toggleSaved(id: string) {
    setSaved((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id],
    );
  }
  return (
    <Store.Provider
      value={{
        items,
        saved,
        toggleSaved,
        addItem: (item) => setItems((old) => [item, ...old]),
      }}
    >
      {children}
    </Store.Provider>
  );
}
export function useStore() {
  const value = useContext(Store);
  if (!value) throw new Error("StoreProvider is required");
  return value;
}
