
import { NextResponse } from 'next/server'

type places = {
	id: string,
	name: string,
	embedded_type: string
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const header = { 'Authorization': process.env.navitia || 'non' };
  const res = await fetch(
    `https://api.navitia.io/v1/coverage/fr-idf/places?q=${q}`,
    {
      headers: new Headers(header)
    }
  );

  const data = await res.json()
  return NextResponse.json(data.places)
}
