import Config from '../common/config'
import { Character } from './types'

export async function getCharacterById(
	id: number
): Promise<{ data: Character | null; error: any }> {
	try {
		const data = await fetch(`${Config.API_URL}/character/${id}`).then((res) => res.json())
		return { data, error: null }
	} catch (error) {
		return { data: null, error }
	}
}
