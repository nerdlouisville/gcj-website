export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-20">
        <h2 className="section-title">About</h2>
        <div className="space-y-4 text-[var(--brand-text)] leading-relaxed max-w-prose">
          <p>
            Game Con Junction is Louisville&apos;s tabletop gaming convention, run by Nerd Louisville and Dukes of
            Highland, two local groups that spend the rest of the year running game nights around town.
          </p>
          <p>
            Badge money goes back into that: free and low-cost gaming events in Louisville, all year.
          </p>
        </div>
      </div>
    </section>
  );
}
