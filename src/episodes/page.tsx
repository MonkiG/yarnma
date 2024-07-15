import { useEffect, useState } from 'react'
import Config from '../common/config'
import { Episode } from './types'

const END_POINT = '/episode'

export default function EpisodesPage() {
	const [episodes, setEpisodes] = useState<Episode[]>()

	useEffect(() => {
		const getEpisodes = async () => {
			const data = await fetch(`${Config.API_URL}${END_POINT}`).then((res) => res.json())

			setEpisodes(data.results)
		}
		getEpisodes()
	}, [])
	return (
		<main>
			<h2>Episodes page</h2>
			<div>
				<h3>Episodes</h3>
				<ul>{episodes && episodes.map((c) => <li key={`${c.name}-${c.id}`}>{c.name}</li>)}</ul>
			</div>
		</main>
	)
}
