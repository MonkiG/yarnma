import { Character } from './types'
import useResourceList from '../common/hooks/useResourceList'
import PageResourceListWrapper from '../common/components/PageResourceListWrapper'

const END_POINT = '/character'

export default function CharactersPage() {
	const { data: characters, pages } = useResourceList<Character[]>(END_POINT)

	return <PageResourceListWrapper data={characters} pages={pages} resourceType='characters' />
}
