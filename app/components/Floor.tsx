const SCHEDULE_URL =
  "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a/schedule?utm_source=gcj-website&utm_medium=floor&utm_campaign=gcj2026";

type Item = {
  name: string;
  summary: string;
  what: string;
  where?: string;
  join?: string;
  when?: string;
  link?: { label: string; href: string };
};

// Only fill `where`, `join` and `when` with things that are confirmed.
// An empty field is simply not shown.
const VENUE_URL =
  "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a/venue?utm_source=gcj-website&utm_medium=floor&utm_campaign=gcj2026";

const items: Item[] = [
  {
    name: "Tabletop RPGs",
    summary: "One game master, a few players, a story you make up together.",
    what:
      "In a roleplaying game one person, the game master, describes the world and everyone else speaks as a character in it. Dice settle what's uncertain. There's no board and nothing to memorize. Dungeons & Dragons is the best known.",
    where: "Mostly upstairs, including the Golden Keep Game Suite. Friday night games also run in the Thoroughbred and Steamboat rooms.",
    join: "Pick a table on the AfterGame schedule and sign up. New players are welcome.",
  },
  {
    name: "High School Dungeoneering Tournament",
    summary: "Student teams, one dungeon, six tables.",
    what:
      "Teams of high school students play through the same Dungeons & Dragons dungeon at six tables, each with its own dungeon master. Nerd Louisville runs it to bring the game to local schools, and the teams are already set.",
    where: "The Golden Keep Game Suite, upstairs with the other RPGs.",
    when: "Friday from 6 to 9 PM.",
  },
  {
    name: "Board game library",
    summary: "Hundreds of games, ready to play.",
    what:
      "Pull a game off the shelf, find a seat, and play. Library staff can help you choose something that fits your group and teach it if you ask.",
    where: "Commonwealth Ballroom, next to Play to Win.",
    when: "Opens Friday at 5 PM.",
  },
  {
    name: "Play to Win",
    summary: "Try a game, maybe take it home.",
    what:
      "Play games from the Play to Win selection and enter the prize draw for a free copy. It's all digital: if you win, you get a notification in AfterGame and collect your game.",
    where: "Commonwealth Ballroom, next to the board game library. It's self-serve, so just pick a game and play.",
    when: "Prize draw Sunday at 3 PM.",
  },
  {
    name: "Megagames",
    summary: "One huge game with a lot of players.",
    what:
      "Everyone gets a role, such as a nation, a faction, or a company, and negotiates, bluffs, and schemes with the others across a shared map or scenario. A single game runs for hours, and a story comes out of it that nobody planned.",
    where: "Upstairs, in the Bluegrass Ballroom.",
    join: "Sign up through the AfterGame schedule.",
  },
  {
    name: "CCG and TCG tournaments",
    summary: "Organized play for collectible card games.",
    what:
      "Bring your deck, get paired up, and play through a bracket against other players. The schedule lists each tournament with its game, format, and start time.",
    where: "The CCG room, upstairs near Artist Alley.",
  },
  {
    name: "Hot Games demos",
    summary: "New and trending games, taught by someone who knows them.",
    what:
      "Sit down and learn a recent release in a few minutes, with no rulebook to read first. It's the easiest way to find out whether a game is for you before you buy it.",
    where: "Commonwealth Ballroom.",
  },
  {
    name: "Minis Paint & Take",
    summary: "Paint a miniature and keep it.",
    what:
      "Pick up a brush, paint a miniature at the table, and take it home with you. No experience needed.",
    where: "Commonwealth Ballroom.",
  },
  {
    name: "Blood on the Clocktower",
    summary: "A bluffing game about finding the liars.",
    what:
      "A storyteller runs a small town where a few players secretly work against everyone else. You talk, accuse, and defend yourself until the town decides who to put on trial. It's a social deduction game, with no board to learn.",
    where: "The Cardinal Room, upstairs.",
    link: { label: "About the game", href: "https://bloodontheclocktower.com" },
  },
  {
    name: "Speed puzzling",
    summary: "Jigsaw puzzles, against the clock.",
    what:
      "Teams race to finish the same puzzle. You don't need to be fast to have a good time. Our sponsor Cobble Hill supplies the puzzles.",
    join: "Check the AfterGame schedule for heat times.",
  },
  {
    name: "Vendors and Artist Alley",
    summary: "Dice, minis, books, prints, plushies.",
    what:
      "Local and traveling vendors sell games, dice, and accessories. In Artist Alley the artists are at their tables and happy to talk about the work, and you can buy straight from them.",
    where: "Vendors fill the Commonwealth Ballroom and the hallway behind and around it. Artist Alley is upstairs.",
  },
  {
    name: "Youth programming",
    summary: "Games for younger players new to the hobby.",
    what:
      "Sessions and tables aimed at kids who are just getting started. Kids ages 6 to 12 have their own weekend badge for $20.",
    join: "Browse the schedule for youth events.",
  },
];

export default function Floor() {
  return (
    <div className="border-t border-[var(--brand-border)]">
      {items.map((item) => (
        <details key={item.name} name="floor" className="floor-item group border-b border-[var(--brand-border)]">
          <summary className="flex items-start justify-between gap-4 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span>
              <span className="block text-[var(--brand-heading)] font-semibold">{item.name}</span>
              <span className="block text-sm text-[var(--brand-muted)] mt-0.5">{item.summary}</span>
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 mt-1 grid place-items-center w-7 h-7 rounded-[var(--radius-btn)] border border-[var(--brand-border)] text-[var(--brand-primary-text)] text-xl leading-none group-hover:border-[var(--brand-primary)]"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">&minus;</span>
            </span>
          </summary>
          <div className="pb-5 pr-9 space-y-3 text-[var(--brand-text)] text-[0.95rem] leading-relaxed">
            <p>{item.what}</p>
            {(item.where || item.join || item.when) && (
              <dl className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-1 text-sm">
                {item.where && (
                  <>
                    <dt className="text-[var(--brand-text-dim)] uppercase tracking-wider text-xs pt-0.5">Where</dt>
                    <dd>{item.where}</dd>
                  </>
                )}
                {item.when && (
                  <>
                    <dt className="text-[var(--brand-text-dim)] uppercase tracking-wider text-xs pt-0.5">When</dt>
                    <dd>{item.when}</dd>
                  </>
                )}
                {item.join && (
                  <>
                    <dt className="text-[var(--brand-text-dim)] uppercase tracking-wider text-xs pt-0.5">Join</dt>
                    <dd>{item.join}</dd>
                  </>
                )}
              </dl>
            )}
            <p className="text-sm">
              <a
                href={SCHEDULE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-primary-text)] underline underline-offset-2"
              >
                Find it on the schedule
              </a>
              {item.link && (
                <>
                  {" · "}
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-primary-text)] underline underline-offset-2"
                  >
                    {item.link.label}
                  </a>
                </>
              )}
            </p>
          </div>
        </details>
      ))}
      <p className="pt-4 text-sm text-[var(--brand-muted)]">
        Maps and room listings are on{" "}
        <a href={VENUE_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-primary-text)] underline underline-offset-2">
          AfterGame
        </a>
        .
      </p>
    </div>
  );
}
