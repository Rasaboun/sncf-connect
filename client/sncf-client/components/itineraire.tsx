import { useEffect, useState } from 'react'


import { journey, itineraireProps, places } from './types/type'

import { ItineraireDetail } from './ui/ItineraireDetail'
import { ItineraireList } from './ui/itinerairelist'
import { getData } from './utils/functions/utils'

const defaultjourney: journey = {
	duration: 0,
	departure_date_time: '',
	arrival_date_time: '',
	sections: [],
	type: '',
	nb_transfers: 0,
	co2_emission: { value: 0 }
}

export default function Itineraire({ place, placesecond }: itineraireProps) {
	const [journeys, setJourneys] = useState(Array<journey>)
	const [selectjourney, setselectJourrney] = useState(defaultjourney)
	
	useEffect(() => {
		setselectJourrney(defaultjourney)
		if (place.id != '' && placesecond.id != '')
			getData(place.id, placesecond.id).then((datas) => setJourneys(datas))
		else {
			setJourneys([])
		}
	}, [place.id, placesecond.id])
	if (journeys.length > 0) {
		return (
			<div className="flex flex-row">
				<ItineraireList
					selectjourney={selectjourney}
					journeys={journeys}
					place={place}
					placesecond={placesecond}
					setJourneys={setJourneys}
					setselectJourrney={setselectJourrney}
				/>

				{selectjourney.arrival_date_time != '' ? (
					<ItineraireDetail journey={selectjourney} />
				) : (
					<div className="lg:w-2/4"> </div>
				)}
			</div>
		)
	} else return <></>
}













