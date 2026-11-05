import Flap from "./Flap";
import Floor from "./Floor";

const hours = [
  { day: "FRI", label: "Friday",   date: "Nov. 6", open: "5:00 PM", close: "4:00 AM" },
  { day: "SAT", label: "Saturday", date: "Nov. 7", open: "8:00 AM", close: "4:00 AM" },
  { day: "SUN", label: "Sunday",   date: "Nov. 8", open: "8:00 AM", close: "6:00 PM" },
];

const before = [
  { head: "Check in", body: "Badge pickup opens Friday at 4:30 PM, and events begin at 5 PM. Everyone checks in at registration, even if you bought in the app. Wear your badge all weekend." },
  { head: "Raffle tickets", body: "Buy them at the merch table. The display is upstairs on the wall of the CCG room, between Artist Alley and the CCG room. Drawing is Sunday at 4 PM." },
  { head: "Finding things", body: "The Commonwealth Ballroom has vendors, the board game library, Play to Win, Hot Games, and open gaming. More vendors line the hallway around it. Friday-night games are in the Thoroughbred and Steamboat rooms by registration. Artist Alley, the CCG room, the raffle display, and the Golden Keep Room for RPGs are upstairs. The hotel bar has informal tables, no reservations." },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[5fr_7fr] gap-14 lg:gap-20">

        {/* Left: what it is + hours */}
        <div>
          <h2 className="section-title mb-8">The weekend</h2>
          <div className="space-y-4 text-[var(--brand-text)] leading-relaxed max-w-prose">
            <p>
              Game Con Junction is a tabletop convention run by Nerd Louisville and Dukes of
              Highland, two local groups that spend the rest of the year running game nights
              around town.
            </p>
            <p>
              Badge money goes back into that: free and low-cost gaming events in Louisville,
              all year.
            </p>
          </div>

          <h3 className="mt-12 mb-4 text-sm uppercase tracking-widest text-[var(--brand-muted)]">
            Hours
          </h3>
          <dl className="border-t border-[var(--brand-border)]">
            {hours.map((h) => (
              <div
                key={h.day}
                className="grid grid-cols-[auto_1fr] items-center gap-x-5 py-4 border-b border-[var(--brand-border)]"
              >
                <dt>
                  <Flap text={h.day} size="md" label={`${h.label}, ${h.date}`} />
                </dt>
                <dd className="text-right sm:text-left">
                  <span className="block text-lg text-[var(--brand-heading)] font-semibold tabular-nums">
                    {h.open} – {h.close}
                  </span>
                  <span className="text-sm text-[var(--brand-muted)]">{h.date}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm text-[var(--brand-muted)]">
            Louisville Marriott East. Friday and Saturday run until 4 AM.
          </p>
        </div>

        {/* Right: what's on the floor */}
        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-[var(--brand-muted)]">
            On the floor
          </h3>
          <Floor />

          <h3 className="mt-12 mb-4 text-sm uppercase tracking-widest text-[var(--brand-muted)]">
            Before you come
          </h3>
          <dl className="grid sm:grid-cols-3 gap-6">
            {before.map((b) => (
              <div key={b.head}>
                <dt className="font-display text-sm text-[var(--brand-primary-text)] mb-2">{b.head}</dt>
                <dd className="text-[var(--brand-text)] leading-relaxed text-sm">{b.body}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}
