import { Location } from './types'
import useResourceList from '../common/hooks/useResourceList'
import PageResourceListWrapper from '../common/components/PageResourceListWrapper'

const END_POINT = '/location'

export default function LocationsPage() {
	const { data: locations, pages } = useResourceList<Location[]>(END_POINT)

	return <PageResourceListWrapper data={locations} pages={pages} resourceType='locations' />
}
