import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { hello: "world" },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
      },
    },
  );
}
