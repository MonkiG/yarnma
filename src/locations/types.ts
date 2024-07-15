import { BaseResource } from '../common/types'

export interface Location extends BaseResource {
	type: string
	dimension: string
	residents: string[]
}
