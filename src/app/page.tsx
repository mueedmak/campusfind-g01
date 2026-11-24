import Link from "next/link";
import Image from "next/image";
import { ItemList } from "@/components/item-list";
import { ButtonLink, InfoCard } from "@/components/ui";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Campus lost & found",
  description:
    "Lost something on campus? Browse the board or report a found item and help it get home.",
};
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" /> SMALL ACTS. BIG REUNIONS.
            </p>
            <h1>
              Lost on campus.
              <br />
              <span>Found by community.</span>
            </h1>
            <p className="hero-description">
              Your everyday essentials have a way back. Find what you’re
              missing, or help someone else find theirs.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/items">Find a lost item ↗</ButtonLink>
              <ButtonLink href="/report" secondary>
                ＋ Report an item
              </ButtonLink>
            </div>
            <div className="community-note">
              <div className="avatar-stack">
                <span>AM</span>
                <span>NK</span>
                <span>IY</span>
              </div>
              <p>
                A campus that looks out for each other.
                <br />
                <strong>One item at a time.</strong>
              </p>
            </div>
          </div>
          <div className="hero-art">
            <span className="art-label">THE CAMPUS LOST & FOUND BOARD</span>
            <div className="hero-orbit" />
            <div className="floating-card bottle">
              <Image
                src="/items/bottle.svg"
                alt="Illustrated blue water bottle"
                width={180}
                height={160}
              />
              <span>Someone’s daily essential.</span>
            </div>
            <div className="floating-card bag">
              <Image
                src="/items/backpack.svg"
                alt="Illustrated green backpack"
                width={240}
                height={210}
              />
              <div>
                <span className="mini-dot" /> Found near the library
              </div>
            </div>
            <div className="reunion-note">
              <span>↗</span>
              <div>
                Good things find
                <br />
                <strong>their way back.</strong>
              </div>
            </div>
            <span className="art-spark">✳</span>
          </div>
        </div>
      </section>
      <div className="trust-strip">
        <div className="container">
          <span>⌖ Made for campus life</span>
          <span>♡ Powered by kindness</span>
          <span>↗ Simple to report. Easy to find.</span>
        </div>
      </div>
      <section className="container section">
        <div className="section-title">
          <div>
            <p className="eyebrow">TAKE A LOOK AROUND</p>
            <h2>
              Recently on the board<span className="dot">.</span>
            </h2>
          </div>
          <Link href="/items" className="text-link">
            Browse all items ↗
          </Link>
        </div>
        <ItemList mode="recent" />
      </section>
      <section className="how-section">
        <div className="container section">
          <div className="section-title">
            <div>
              <p className="eyebrow">A LITTLE HELP GOES A LONG WAY</p>
              <h2>Back together in three steps.</h2>
            </div>
            <p>
              No fuss. Just a friendly way
              <br />
              to reconnect with your things.
            </p>
          </div>
          <div className="steps">
            <InfoCard number="01" title="Spot it on the board">
              Browse recent reports or search for the item you’re missing.
            </InfoCard>
            <InfoCard number="02" title="Share a few details">
              Found something? Post where and when. Lost something? Let campus
              know.
            </InfoCard>
            <InfoCard number="03" title="Make the connection">
              Describe a unique detail, verify ownership, and arrange a campus
              handover.
            </InfoCard>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="cta">
          <div>
            <p className="eyebrow">BE SOMEONE’S GOOD NEWS</p>
            <h2>
              Found something?
              <br />
              You could make someone’s day.
            </h2>
          </div>
          <ButtonLink href="/report">Report a found item ↗</ButtonLink>
        </div>
      </section>
    </>
  );
}
