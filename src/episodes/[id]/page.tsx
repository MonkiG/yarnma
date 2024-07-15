import { useParams } from 'wouter'
import useResource from '../../common/hooks/useResource'
import { Episode } from '../types'
import PageResourceWrapper from '../../common/components/PageResourceWrapper'

export default function EpisodePage() {
	const { id } = useParams()
	const { data: episode } = useResource<Episode>('episode', id!)

	return <PageResourceWrapper data={episode} type='episodes' />
}
