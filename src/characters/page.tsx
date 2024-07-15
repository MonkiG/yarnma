import { useEffect, useState } from 'react'
import Config from '../common/config'
import { Character } from './types'

const END_POINT = '/character'

export default function CharactersPage() {
	const [characters, setCharacters] = useState<Character[]>()

	useEffect(() => {
		const getCharacters = async () => {
			const data = await fetch(`${Config.API_URL}${END_POINT}`).then((res) => res.json())

			setCharacters(data.results)
		}

		getCharacters()
	}, [])

	return (
		<main>
			<h2>Characters page</h2>
			<div>
				<h3>Characters</h3>
				<ul>{characters && characters.map((c) => <li key={`${c.name}-${c.id}`}>{c.name}</li>)}</ul>
			</div>
		</main>
	)
}
