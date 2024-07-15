import { Link } from 'wouter'
import { BaseResource, ResourceType } from '../types'
import PaginationBar from './PaginationBar'

interface Props {
	data: BaseResource[]
	type: ResourceType
	pages: number
}
export default function Table({ data, type, pages }: Props) {
	const parseDate = (date: string) => new Date(date).toLocaleDateString()
	return (
		<>
			<table width={'100%'} style={{ textAlign: 'center', marginTop: '30px' }}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Page</th>
						<th>Created at</th>
					</tr>
				</thead>
				<tbody>
					{data.map((r) => (
						<tr key={r.url}>
							<td>{r.id}</td>
							<td>{r.name}</td>
							<td>
								<Link to={`/${type}/${r.id}`} style={{ textDecoration: 'underline' }}>
									See {r.name} details
								</Link>
							</td>
							<td>{parseDate(r.created)}</td>
						</tr>
					))}
				</tbody>
			</table>
			<PaginationBar type={type} length={pages} />
		</>
	)
}
