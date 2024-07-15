import { useMemo } from 'react'
import { Character } from '../../characters/types'
import { Episode } from '../../episodes/types'
import { Location } from '../../locations/types'
import { ResourceType } from '../types'
import AppLayout from './AppLayout'
import Table from './Table'

interface Props {
	resourceType: ResourceType
	data?: Character[] | Location[] | Episode[]
	pages: number
}
export default function PageResourceListWrapper({ resourceType, data, pages }: Props) {
	const typeParsed = useMemo(
		() => resourceType.charAt(0).toLocaleUpperCase() + resourceType.slice(1),
		[resourceType]
	)
	return (
		<AppLayout>
			<main style={{ flexGrow: '1' }}>
				<h2>{typeParsed} page</h2>
				<div>{data && <Table data={data} type={resourceType} pages={pages} />}</div>
			</main>
		</AppLayout>
	)
}
