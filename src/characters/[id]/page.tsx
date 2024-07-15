import { useParams } from 'wouter'
import useResource from '../../common/hooks/useResource'
import { Character } from '../types'
import PageResourceWrapper from '../../common/components/PageResourceWrapper'

export default function CharacterPage() {
	const { id } = useParams()
	const { data: character } = useResource<Character>('character', id!)

	return <PageResourceWrapper data={character} type='characters' />
}
