import { useEffect, useState } from 'react'
import Config from '../common/config'
import { Location } from './types'
const END_POINT = '/location'

export default function LocationsPage() {
	const [locations, setLocations] = useState<Location[]>()

	useEffect(() => {
		const getLocations = async () => {
			const data = await fetch(`${Config.API_URL}${END_POINT}`).then((res) => res.json())
			setLocations(data.results)
		}

		getLocations()
	}, [])

	return (
		<main>
			<h2>Locations page</h2>
			<div>
				<h3>Locations</h3>
				<ul>{locations && locations.map((c) => <li key={`${c.name}-${c.id}`}>{c.name}</li>)}</ul>
			</div>
		</main>
	)
}
