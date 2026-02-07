import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="w-full max-w-3xl space-y-4">
      <p className="text-center text-sm leading-relaxed text-primary/70">
        Software engineer based in NYC. Founder of a Saudi AI company.
      </p>

      <div className="grid grid-cols-3 gap-3">
        <Card className="gap-3 p-4 text-primary backdrop-blur-sm">
          <CardHeader className="p-0">
            <CardTitle className="font-mono text-[10px] tracking-widest text-primary uppercase">
              Building
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-sm text-primary">
              <a
                href="https://saqi.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                saqi.app
              </a>{" "}
              &mdash; AI Arabic language platform
            </p>
          </CardContent>
        </Card>

        <Card className="gap-3 p-4 text-primary backdrop-blur-sm">
          <CardHeader className="p-0">
            <CardTitle className="font-mono text-[10px] tracking-widest text-primary uppercase">
              Location
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-sm text-primary">New York City</p>
          </CardContent>
        </Card>

        <Card className="gap-3 p-4 text-primary backdrop-blur-sm">
          <CardHeader className="p-0">
            <CardTitle className="font-mono text-[10px] tracking-widest text-primary uppercase">
              Links
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="space-y-0.5">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="gap-3 p-4 text-primary backdrop-blur-sm">
          <CardHeader className="p-0">
            <CardTitle className="font-mono text-[10px] tracking-widest text-primary uppercase">
              Interests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="space-y-0.5">
              {INTERESTS.map((item) => (
                <li key={item} className="text-sm text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="gap-3 p-4 text-primary backdrop-blur-sm">
          <CardHeader className="p-0">
            <CardTitle className="font-mono text-[10px] tracking-widest text-primary uppercase">
              Writers
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="space-y-0.5">
              {WRITERS.map((name) => (
                <li key={name} className="text-sm text-primary">
                  {name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="gap-3 p-4 text-primary backdrop-blur-sm">
          <CardHeader className="p-0">
            <CardTitle className="font-mono text-[10px] tracking-widest text-primary uppercase">
              Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <a
              href="mailto:nasr@maswood.dev"
              className="text-sm text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              nasr@maswood.dev
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
