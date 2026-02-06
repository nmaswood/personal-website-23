"use cache";

import { cacheLife } from "next/cache";
import Chat from "./chat";

// eslint-disable-next-line @typescript-eslint/require-await -- Next.js "use cache" requires async
export default async function Home() {
  cacheLife("days");

  return (
    <div className="min-h-screen bg-orange flex items-center justify-center px-6 py-4 overflow-auto">
      <Chat />
    </div>
  );
}
