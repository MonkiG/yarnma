import { Link } from 'wouter'
import { Character } from '../../characters/types'
import { Episode } from '../../episodes/types'
import { Location } from '../../locations/types'
import AppLayout from './AppLayout'
import { ResourceType } from '../types'

interface Props {
	data?: Character | Location | Episode
	type: ResourceType
}

export default function PageResourceWrapper({ data, type }: Props) {
	const typeDic: Record<ResourceType, React.ReactNode> = {
		characters: <CharacterWrapper character={data as Character} />,
		locations: <LocationWrapper location={data as Location} />,
		episodes: <EpisodeWrapper episode={data as Episode} />
	}

	data && console.log(Object.entries(data))
	return (
		<AppLayout>
			<main style={{ flexGrow: '1' }}>{data && typeDic[type]}</main>
		</AppLayout>
	)
}

const EpisodeWrapper = ({ episode }: { episode: Episode }) => {
	return (
		<>
			<h2>{episode.name}</h2>
			<ul>
				<li>Air date: {episode.air_date}</li>
				<li>Episode: {episode.episode}</li>
				<li>
					Characters in the episode:
					<ul>
						{episode.characters.map((c) => (
							<li key={c}>{c}</li>
						))}
					</ul>
				</li>
			</ul>
		</>
	)
}
const LocationWrapper = ({ location }: { location: Location }) => {
	return (
		<>
			<h2>{location.name}</h2>
			<ul>
				<li>Type: {location.type}</li>
				<li>Dimension: {location.dimension}</li>
				<li>
					Residents:
					<ul>
						{location.residents.map((r) => (
							<li key={r}>{r}</li>
						))}
					</ul>
				</li>
			</ul>
		</>
	)
}
const CharacterWrapper = ({ character }: { character: Character }) => {
	const getLocationId = (url: string) => url.split('/').slice(-1)
	return (
		<>
			<picture>
				<img src={`${character.image}`} alt={`${character.name} image`} />
				<h2>{character.name}</h2>
			</picture>
			<ul>
				<li>Status: {character.status}</li>
				<li>Specie: {character.species}</li>
				<li>Gender: {character.gender}</li>
				<li>
					Origin:{' '}
					<Link to={`/locations/${getLocationId(character.origin.url)}`}>
						{character.origin.name}
					</Link>
				</li>
				<li>
					Last known location:{' '}
					<Link to={`/locations/${getLocationId(character.location.url)}`}>
						{character.location.name}
					</Link>
				</li>
				<li>
					Episodes:
					<ul>
						{character.episode.map((e) => (
							<li>{e}</li>
						))}
					</ul>
				</li>
			</ul>
		</>
	)
}
