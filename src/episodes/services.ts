import Config from '../common/config'
import { Episode } from './types'
export async function getEpisodeById(id: number): Promise<{ data: Episode | null; error: any }> {
	try {
		const data = await fetch(`${Config.API_URL}/episode/${id}`).then((res) => res.json())
		return { data, error: null }
	} catch (error) {
		return { data: null, error }
	}
}
