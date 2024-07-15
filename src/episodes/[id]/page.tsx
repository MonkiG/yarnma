import { useParams } from 'wouter'
import useResource from '../../common/hooks/useResource'
import { Episode } from '../types'

export default function EpisodePage() {
	const { id } = useParams()
	const [episode] = useResource<Episode>('episode', id!)
	return (
		<main>
			<h2>Episode page: {id} </h2>
			{episode && JSON.stringify(episode)}
		</main>
	)
}
