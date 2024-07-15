import { BaseResource } from '../common/types'

export interface Character extends BaseResource {
	status: string
	species: string
	type: string
	gender: string
	origin: Origin
	location: Location
	image: string
	episode: string[]
}

export interface Origin {
	name: string
	url: string
}

export interface Location {
	name: string
	url: string
}

export interface ResponseInfo {
	count: number
	pages: number
	next: string
	prev: null | string
}

export interface ApiResponse {
	info: ResponseInfo
	results: Character[]
}
