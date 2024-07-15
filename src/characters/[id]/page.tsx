import { useParams } from 'wouter'
import useResource from '../../common/hooks/useResource'
import { Character } from '../types'

export default function CharacterPage() {
	const { id } = useParams()
	const [character] = useResource<Character>('character', id!)

	return (
		<main>
			<h2>Character page: {id}</h2>
			{character && JSON.stringify(character)}
		</main>
	)
}
