import { places } from "./types/type";
import { use, useEffect, useState } from "react";
type journey = {
  duration: number;
  departure_date_time: string;
  arrival_date_time: string;
  sections: section[];
};

type display_information = {
  label: string;
  color: string;
};

type section = {
  type: string;
  display_informations?: display_information;
};

type itineraireProps = {
  place: places;
  placesecond: places;
};

const resource_id_1 = "stop_area:IDFM:69925";
const resource_id_2 = "stop_area:IDFM:474151";

async function getData(from: string, to: string) {
  const res = await fetch(`/journey?from=${from}&to=${to}`);
  const data: journey[] = await res.json();
  return data;
}
export default function Itineraire({ place, placesecond }: itineraireProps) {
  const [journeys, setJourneys] = useState(Array<journey>);

  useEffect(() => {
    if (place.id != "" && placesecond.id != "")
      getData(place.id, placesecond.id).then((datas) => setJourneys(datas));
  }, [place.id, placesecond.id]);
  if (journeys.length > 0) {
    return (
      <div className="max-w-7xl mx-4 flex flex-col space-y-4">
        {
			journeys.map((elem, id)=> <ItineraireList key={elem.departure_date_time + id} journey={elem} /> )
		}
      </div>
    );
  } else return <></>;
}


function ItineraireList({journey }: {journey: journey}) {
	const depart = journey.departure_date_time
	const arrive = journey.arrival_date_time
	const departIso = depart.slice(0,4) + "-" + depart.slice(4,6) + "-" + depart.slice(6,11) + ":" + depart.slice(11,13) + ":" + depart.slice(13,15)
	const arrivetIso = arrive.slice(0,4) + "-" + arrive.slice(4,6) + "-" + arrive.slice(6,11) + ":" + arrive.slice(11,13) + ":" + arrive.slice(13,15)

	const departDate = new Date(departIso)
	const arriveDate = new Date(arrivetIso)


	const itineraireTransport = journey.sections.map((elem, id) => <span className={"text-white p-1"} style={{backgroundColor: `#${elem.display_informations?.color}`}} key={elem.type + id}>{elem.display_informations?.label}</span>)

	return (
		<div className="flex flex-row bg-white rounded-xl w-full md:w-3/5 md:ml-6">
			<div className="flex flex-col font-medium">
				<p>{departDate.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + departDate.getMinutes()}</p>
				<p>{arriveDate.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false}) + ":" + arriveDate.getMinutes()}</p>
			</div>
			<div className="flex flex-col items-center justify-start p-2">
				<div>
					{
						itineraireTransport
					}
				</div>
				<div>
					{(journey.duration/60).toFixed() + "min"}
				</div>
			</div>
		</div>
	)
}
