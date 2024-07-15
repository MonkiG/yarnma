import { useParams } from 'wouter'
import useResource from '../../common/hooks/useResource'
import PageResourceWrapper from '../../common/components/PageResourceWrapper'
import { type Location } from '../types'

export default function LocationPage() {
	const { id } = useParams()
	const { data: location } = useResource<Location>('location', id!)
	return <PageResourceWrapper data={location} type='locations' />
}
