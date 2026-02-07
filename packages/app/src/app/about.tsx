const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nasr-maswood/",
  },
  {
    label: "GitHub",
    href: "https://github.com/nmaswood",
  },
] as const;

const INTERESTS = [
  "Compilers & language design",
  "Distributed systems",
  "Generative AI infrastructure",
  "Arabic NLP",
  "Running",
];

const WRITERS = [
  "Jorge Luis Borges",
  "Ursula K. Le Guin",
  "Ted Chiang",
  "Italo Calvino",
];

export default function About() {
  return (
    <section className="relative z-20 bg-neutral-950 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl space-y-16">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-neutral-300">
            Software engineer based in New York. Founder of an AI company in
            Saudi Arabia. I like building things that feel inevitable in
            hindsight.
          </p>
        </div>

        {/* Current project */}
        <div className="rounded-lg border border-neutral-800 p-5">
          <p className="mb-3 font-mono text-xs tracking-widest text-neutral-500 uppercase">
            Currently Building
          </p>
          <p className="text-neutral-300">
            Working on{" "}
            <a
              href="https://saqi.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline decoration-neutral-700 underline-offset-4 transition-colors hover:text-white hover:decoration-neutral-400"
            >
              saqi.app
            </a>
            {" "}&mdash; an AI-powered Arabic language platform.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Location */}
          <Card label="Location">
            <p className="text-neutral-300">New York City</p>
          </Card>

          {/* Links */}
          <Card label="Links">
            <ul className="space-y-1">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 underline decoration-neutral-700 underline-offset-4 transition-colors hover:text-white hover:decoration-neutral-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          {/* Interests */}
          <Card label="Interests">
            <ul className="space-y-1">
              {INTERESTS.map((item) => (
                <li key={item} className="text-neutral-300">
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Favorite writers */}
          <Card label="Favorite Writers">
            <ul className="space-y-1">
              {WRITERS.map((name) => (
                <li key={name} className="text-neutral-300">
                  {name}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Contact */}
        <div className="border-t border-neutral-800 pt-12 text-center">
          <p className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
            Get in touch
          </p>
          <a
            href="mailto:nasr@maswood.dev"
            className="mt-2 inline-block text-lg text-neutral-300 underline decoration-neutral-700 underline-offset-4 transition-colors hover:text-white hover:decoration-neutral-400"
          >
            nasr@maswood.dev
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-neutral-800 p-5">
      <p className="mb-3 font-mono text-xs tracking-widest text-neutral-500 uppercase">
        {label}
      </p>
      {children}
    </div>
  );
}
