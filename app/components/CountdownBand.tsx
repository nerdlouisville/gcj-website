import Countdown from "./Countdown";

/** Slim band under the hero: just the countdown to events starting. */
export default function CountdownBand() {
  return (
    <section id="countdown" className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Countdown />
      </div>
    </section>
  );
}
