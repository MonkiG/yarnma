import { useEffect, useState } from 'react'
import Config from '../config'

export default function useResource<T>(resource: string, id: string) {
	if (!id) throw new Error('Id of the resource is mandatory!')
	if (!resource) throw new Error('Resource type is mandatory!')

	const [data, setData] = useState<T>()

	useEffect(() => {
		const getResource = async () => {
			const dataRes = await fetch(`${Config.API_URL}/${resource}/${id}`).then((res) => res.json())
			setData(dataRes)
		}

		getResource()
	}, [resource, id])

	return [data, setData]
}
