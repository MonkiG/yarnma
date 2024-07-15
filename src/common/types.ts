export interface ApiResponse<T> {
	info: ApiResponseInfo
	results: ApiResponseResults<T>
}

export interface ApiResponseInfo {
	count: number
	pages: number
	next: string
	prev: null | string
}

export interface BaseResource {
	id: number
	name: string
	url: string
	created: string
}

export type ApiResponseResults<T> = T[]

export type ResourceType = 'characters' | 'episodes' | 'locations'
export type PageApiEndpoint = '/character' | '/episode' | '/location'
