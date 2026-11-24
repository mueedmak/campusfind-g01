import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";
export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This report or page could not be found. Return to the campus item board.",
};
export default function NotFound() {
  return (
    <div className="container empty not-found">
      <p className="eyebrow">404 / A LITTLE LOST</p>
      <h1>This page wandered off.</h1>
      <p>
        We couldn’t find that page or item. Let’s get you back to the board.
      </p>
      <ButtonLink href="/items">Back to the board ↗</ButtonLink>
    </div>
  );
}
