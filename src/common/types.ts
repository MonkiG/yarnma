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

export type ApiResponseResults<T> = T[]
