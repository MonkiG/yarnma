import { useEffect, useRef, useState } from 'react'
import { useSearch } from 'wouter'
import { PageApiEndpoint } from '../types'
import Config from '../config'

export default function useResourceList<T>(endpoint: PageApiEndpoint) {
	const [data, setData] = useState<T>()
	const searchParams = useSearch()
	const pagesRef = useRef<number>()
	const page = new URLSearchParams(searchParams).get('page') || '1'

	useEffect(() => {
		;(async () => {
			const resData = await fetch(`${Config.API_URL}${endpoint}/?page=${page}`).then((res) =>
				res.json()
			)
			if (!pagesRef.current) {
				pagesRef.current = resData.info.pages
			}
			setData(resData.results)
		})()
	}, [page])

	return {
		data,
		pages: pagesRef.current!
	}
}
