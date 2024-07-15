import { BaseResource } from '../common/types'

export interface Episode extends BaseResource {
	air_date: string
	episode: string
	characters: string[]
}
