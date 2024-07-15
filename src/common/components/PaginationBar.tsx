import { Link } from 'wouter'
import { ResourceType } from '../types'

interface Props {
	type: ResourceType
	length: number
}

export default function PaginationBar({ type, length }: Props) {
	return (
		<div>
			{Array.from({ length }).map((_, i) => (
				<Link
					style={{ padding: '5px', border: 'solid 1px black', cursor: 'pointer', margin: '1px' }}
					key={`/${type}?page=${i + 1}`}
					href={`/${type}?page=${i + 1}`}
				>
					{i + 1}
				</Link>
			))}
		</div>
	)
}
