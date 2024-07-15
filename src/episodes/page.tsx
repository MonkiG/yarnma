import { Episode } from './types'
import PageResourceListWrapper from '../common/components/PageResourceListWrapper'
import useResourceList from '../common/hooks/useResourceList'

const END_POINT = '/episode'

export default function EpisodesPage() {
	const { data: locations, pages } = useResourceList<Episode[]>(END_POINT)
	return <PageResourceListWrapper pages={pages} data={locations} resourceType='episodes' />
}
