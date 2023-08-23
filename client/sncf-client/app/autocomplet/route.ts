import { NextResponse } from "next/server";

type places = {
  id: string;
  name: string;
  embedded_type: string;
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const header = { Authorization: process.env.navitia || "non" };
  let data = null;
  const res = await fetch(
    `https://api.navitia.io/v1/coverage/fr-idf/places?q=${q}`,
    {
      headers: new Headers(header),
    }
  );
  if (res.ok) {
    data = await res.json();
    if (data) return NextResponse.json(data.places);
  } else
    return NextResponse.json({ message: "Sorry fail to connect to SNCF API" });
}
