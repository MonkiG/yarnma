import { Link } from 'wouter'
import { Character } from '../../characters/types'
import { Episode } from '../../episodes/types'
import { Location } from '../../locations/types'
import AppLayout from './AppLayout'
import { ResourceType } from '../types'
import { getEpisodeById } from '../../episodes/services'
import { useEffect, useState } from 'react'
import { getCharacterById } from '../../characters/services'

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

	return (
		<AppLayout>
			<main style={{ flexGrow: '1' }}>{data && typeDic[type]}</main>
		</AppLayout>
	)
}

const EpisodeWrapper = ({ episode }: { episode: Episode }) => {
	const [characters, setCharacters] = useState<Character[]>()

	useEffect(() => {
		;(async () => {
			const charactersParsed = await Promise.all(
				episode.characters.map(async (c) => {
					const { data } = await getCharacterById(Number(c.split('/').slice(-1)))
					return data
				})
			)

			setCharacters(charactersParsed.filter((c) => c !== null))
		})()
	}, [episode.characters])

	return (
		<>
			<h2>{episode.name}</h2>
			<ul>
				<li>Air date: {episode.air_date}</li>
				<li>Episode: {episode.episode}</li>
				<li>
					Characters in the episode:
					<ul>
						{characters &&
							characters.map((c) => (
								<li key={c.id}>
									<Link to={`/characters/${c.id}`} style={{ textDecoration: 'underline' }}>
										{c.name}
									</Link>
								</li>
							))}
					</ul>
				</li>
			</ul>
		</>
	)
}
const LocationWrapper = ({ location }: { location: Location }) => {
	const [residents, setResidents] = useState<Character[]>([])
	useEffect(() => {
		;(async () => {
			const residentsParsed = await Promise.all(
				location.residents.map(async (r) => {
					const { data } = await getCharacterById(Number(r.split('/').slice(-1)))
					return data
				})
			)

			setResidents(residentsParsed.filter((r) => r !== null))
		})()
	}, [location.residents])
	return (
		<>
			<h2>{location.name}</h2>
			<ul>
				<li>Type: {location.type}</li>
				<li>Dimension: {location.dimension}</li>
				<li>
					Residents:
					<ul>
						{residents &&
							residents.map((r) => (
								<li key={r.id}>
									<Link style={{ textDecoration: 'underline' }} to={`/characters/${r.id}`}>
										{r.name}
									</Link>
								</li>
							))}
					</ul>
				</li>
			</ul>
		</>
	)
}
const CharacterWrapper = ({ character }: { character: Character }) => {
	const [episodes, setEpisodes] = useState<Episode[]>([])

	const getCharacterId = (url: string) => url.split('/').slice(-1)
	useEffect(() => {
		;(async () => {
			const episodesParsed = await Promise.all(
				character.episode.map(async (e) => {
					const { data } = await getEpisodeById(Number(e.split('/').slice(-1)))
					return data
				})
			)
			setEpisodes(episodesParsed.filter((x) => x !== null))
		})()
	}, [character.episode])

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
					<Link to={`/locations/${getCharacterId(character.origin.url)}`}>
						{character.origin.name}
					</Link>
				</li>
				<li>
					Last known location:{' '}
					<Link to={`/locations/${getCharacterId(character.location.url)}`}>
						{character.location.name}
					</Link>
				</li>
				<li>
					Episodes:
					<ul>
						{episodes &&
							episodes.map((e) => {
								return (
									<li key={`${e.name}-${e.id}`}>
										<Link to={`/episodes/${e.id}`} style={{ textDecoration: 'underline' }}>
											{e.name}
										</Link>
									</li>
								)
							})}
					</ul>
				</li>
			</ul>
		</>
	)
}
