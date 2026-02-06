"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const DOG_AVATAR =
  "https://mymodernmet.com/wp/wp-content/uploads/2018/01/bailey-dog-meme-2.jpg";
const NASR_AVATAR = "https://storage.googleapis.com/nasr-public/nasr-icon.png";

const TYPING_SPEED = 40;
const STAGE_DELAY = 500;

interface Message {
  sender: "dog" | "nasr";
  text: string;
  html?: boolean;
}

const MESSAGES: Message[] = [
  { sender: "dog", text: "What is your name and where do you live?" },
  { sender: "nasr", text: "My name is Nasr and I live in NYC 🗽" },
  { sender: "dog", text: "What are you up to these days?" },
  {
    sender: "nasr",
    text: `I have been reading a lot (<i>The Brothers Karamazov</i> by Dostoevsky, <i>Capitalist Realism</i> by Mark Fisher, <i>At the Mountains of Madness</i> by H.P. Lovecraft), exploring NYC, and chasing a 315 squat 🏋️`,
    html: true,
  },
  { sender: "dog", text: "Wow! Sounds great! How can I get in touch?" },
  { sender: "nasr", text: "Email me at nasrmaswood@gmail.com" },
];

function useTypingEffect(text: string, active: boolean, speed: number) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      setDone(false);
      return;
    }

    setDisplayed("");
    setDone(false);
    let i = 0;

    const interval = setInterval(() => {
      i++;
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, active, speed]);

  return { displayed, done };
}

function Bubble({
  message,
  stage,
  index,
  onDone,
}: {
  message: Message;
  stage: number;
  index: number;
  onDone: () => void;
}) {
  const active = stage === index;
  const visible = stage >= index;
  const completed = stage > index;
  const { displayed, done } = useTypingEffect(
    message.text,
    active,
    TYPING_SPEED,
  );

  const isDog = message.sender === "dog";
  const avatar = isDog ? DOG_AVATAR : NASR_AVATAR;
  const doneRef = useRef(false);

  useEffect(() => {
    if (done && !doneRef.current) {
      doneRef.current = true;
      const timer = setTimeout(onDone, STAGE_DELAY);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [done, onDone]);

  // Reset doneRef when stage changes
  useEffect(() => {
    if (!active) {
      doneRef.current = false;
    }
  }, [active]);

  if (!visible) return null;

  const content = completed ? message.text : displayed;

  return (
    <div className="animate-collapse-in">
      <div className="w-[350px] max-w-full flex items-start gap-4 p-4 rounded-xl bg-white shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt={isDog ? "Dog" : "Nasr"}
          width={44}
          height={44}
          className="rounded-sm object-cover shrink-0"
          style={{ width: 44, height: 44 }}
        />
        <div className="text-sm text-gray-800 leading-relaxed pt-2.5">
          {message.html && (completed || active) ? (
            <span dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <span>{content}</span>
          )}
          {active && !done && (
            <span className="inline-block w-[2px] h-[1em] bg-gray-800 ml-[1px] animate-pulse align-text-bottom" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function Chat() {
  const [stage, setStage] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  const advance = useCallback(() => {
    setStage((s) => Math.min(s + 1, MESSAGES.length));
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [stage]);

  return (
    <div className="flex flex-col items-center gap-5">
      {MESSAGES.map((msg, i) => (
        <Bubble
          key={i}
          message={msg}
          stage={stage}
          index={i}
          onDone={advance}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
