import { NextResponse } from "next/server";

type places = {
  id: string;
  name: string;
  embedded_type: string;
};

type journey = {
	duration : number,
	departure_date_time: string,
	arrival_date_time: string,
	sections : section[]
}

type display_information = {
	label: string,
	color : string,

}

type section = {
	type: string,
	display_informations: display_information,
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const from = url.searchParams.get("from");
  const to = url.searchParams.get("to");
  const header = { Authorization: process.env.navitia || "non" };
  let data = null;
  const res = await fetch(
    `https://api.navitia.io/v1/journeys?from=${from}&to=${to}`,
    {
      headers: new Headers(header),
    }
  );
  if (res.ok) {
    data = await res.json();
    if (data) return NextResponse.json(data.journeys);
  } else
    return NextResponse.json({ message: "Sorry fail to connect to SNCF API" });
}
