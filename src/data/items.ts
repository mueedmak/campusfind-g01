export interface CampusItem {
  id: string;
  title: string;
  category: string;
  location: string;
  status: "Lost" | "Found";
  date: string;
  description: string;
  image: string;
}
export const initialItems: CampusItem[] = [
  {
    id: "1",
    title: "Black everyday backpack",
    category: "Bags",
    location: "Library, second floor",
    status: "Found",
    date: "2026-11-23",
    description:
      "Black everyday backpack, reported near Library, second floor. Safely handed to the campus help desk. Please describe a distinguishing feature when claiming it.",
    image: "/items/backpack.svg",
  },
  {
    id: "2",
    title: "Silver wireless headphones",
    category: "Electronics",
    location: "Computing Block",
    status: "Lost",
    date: "2026-11-22",
    description:
      "Silver wireless headphones, reported near Computing Block. Last seen on campus. If you have found it, please send a message through the contact form.",
    image: "/items/headphones.svg",
  },
  {
    id: "3",
    title: "Blue insulated bottle",
    category: "Accessories",
    location: "Sports Complex",
    status: "Found",
    date: "2026-11-21",
    description:
      "Blue insulated bottle, reported near Sports Complex. Safely handed to the campus help desk. Please describe a distinguishing feature when claiming it.",
    image: "/items/bottle.svg",
  },
  {
    id: "4",
    title: "Calculus notebook",
    category: "Books",
    location: "Room C-204",
    status: "Lost",
    date: "2026-11-20",
    description:
      "Calculus notebook, reported near Room C-204. Last seen on campus. If you have found it, please send a message through the contact form.",
    image: "/items/notebook.svg",
  },
  {
    id: "5",
    title: "House keys with green tag",
    category: "Keys",
    location: "Main Cafeteria",
    status: "Found",
    date: "2026-11-19",
    description:
      "House keys with green tag, reported near Main Cafeteria. Safely handed to the campus help desk. Please describe a distinguishing feature when claiming it.",
    image: "/items/keys.svg",
  },
  {
    id: "6",
    title: "Brown leather wallet",
    category: "Accessories",
    location: "Parking Area",
    status: "Lost",
    date: "2026-11-18",
    description:
      "Brown leather wallet, reported near Parking Area. Last seen on campus. If you have found it, please send a message through the contact form.",
    image: "/items/wallet.svg",
  },
  {
    id: "7",
    title: "White charging adapter",
    category: "Electronics",
    location: "Library, ground floor",
    status: "Found",
    date: "2026-11-17",
    description:
      "White charging adapter, reported near Library, ground floor. Safely handed to the campus help desk. Please describe a distinguishing feature when claiming it.",
    image: "/items/charger.svg",
  },
  {
    id: "8",
    title: "Round reading glasses",
    category: "Accessories",
    location: "Lecture Hall A",
    status: "Found",
    date: "2026-11-16",
    description:
      "Round reading glasses, reported near Lecture Hall A. Safely handed to the campus help desk. Please describe a distinguishing feature when claiming it.",
    image: "/items/glasses.svg",
  },
  {
    id: "9",
    title: "Introduction to Networks",
    category: "Books",
    location: "Computing Block",
    status: "Lost",
    date: "2026-11-23",
    description:
      "Introduction to Networks, reported near Computing Block. Last seen on campus. If you have found it, please send a message through the contact form.",
    image: "/items/book.svg",
  },
  {
    id: "10",
    title: "Navy canvas tote",
    category: "Bags",
    location: "Main Cafeteria",
    status: "Found",
    date: "2026-11-22",
    description:
      "Navy canvas tote, reported near Main Cafeteria. Safely handed to the campus help desk. Please describe a distinguishing feature when claiming it.",
    image: "/items/tote.svg",
  },
  {
    id: "11",
    title: "Scientific calculator",
    category: "Electronics",
    location: "Room C-204",
    status: "Lost",
    date: "2026-11-21",
    description:
      "Scientific calculator, reported near Room C-204. Last seen on campus. If you have found it, please send a message through the contact form.",
    image: "/items/calculator.svg",
  },
  {
    id: "12",
    title: "Red sports bottle",
    category: "Accessories",
    location: "Sports Complex",
    status: "Lost",
    date: "2026-11-20",
    description:
      "Red sports bottle, reported near Sports Complex. Last seen on campus. If you have found it, please send a message through the contact form.",
    image: "/items/bottle.svg",
  },
  {
    id: "13",
    title: "Motorbike key",
    category: "Keys",
    location: "Parking Area",
    status: "Found",
    date: "2026-11-19",
    description:
      "Motorbike key, reported near Parking Area. Safely handed to the campus help desk. Please describe a distinguishing feature when claiming it.",
    image: "/items/keys.svg",
  },
  {
    id: "14",
    title: "Grey laptop sleeve",
    category: "Bags",
    location: "Library, second floor",
    status: "Lost",
    date: "2026-11-18",
    description:
      "Grey laptop sleeve, reported near Library, second floor. Last seen on campus. If you have found it, please send a message through the contact form.",
    image: "/items/sleeve.svg",
  },
  {
    id: "15",
    title: "Green pocket journal",
    category: "Books",
    location: "Lecture Hall A",
    status: "Found",
    date: "2026-11-17",
    description:
      "Green pocket journal, reported near Lecture Hall A. Safely handed to the campus help desk. Please describe a distinguishing feature when claiming it.",
    image: "/items/notebook.svg",
  },
  {
    id: "16",
    title: "USB flash drive",
    category: "Electronics",
    location: "Computing Block",
    status: "Found",
    date: "2026-11-16",
    description:
      "USB flash drive, reported near Computing Block. Safely handed to the campus help desk. Please describe a distinguishing feature when claiming it.",
    image: "/items/usb.svg",
  },
];
