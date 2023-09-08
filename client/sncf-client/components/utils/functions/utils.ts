import { section, journey } from "@/components/types/type"

export function rawTimeToIso(date: string) {
	const dateIso =
		date.slice(0, 4) +
		'-' +
		date.slice(4, 6) +
		'-' +
		date.slice(6, 11) +
		':' +
		date.slice(11, 13) +
		':' +
		date.slice(13, 15)
	return dateIso
}

export function Chevron(id: number, section: section[]) {
	const isTransportorStreetnetwork = (element: section) =>
		element.type == 'public_transport' || element.type == 'street_network'

	if (section.findLastIndex(isTransportorStreetnetwork) > id) {
		return true
	}
	return false
}

export async function getData(from: string, to: string) {
	const res = await fetch(`/journey?from=${from}&to=${to}`)
	const data: journey[] = await res.json()
	return data
}