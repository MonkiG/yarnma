import { useParams } from 'wouter'
import useResource from '../../common/hooks/useResource'

export default function LocationPage() {
	const { id } = useParams()
	const [location] = useResource<Location>('location', id!)
	return (
		<main>
			<h2>Location page: {id} </h2>
			{location && JSON.stringify(location)}
		</main>
	)
}
