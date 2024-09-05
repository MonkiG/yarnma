import { useEffect, useState } from 'react'
import './App.css'
import AppLayout from './common/components/AppLayout'
import { Link } from 'wouter'
import Config from './common/config'

interface Options {
	characters: string
	locations: string
	episodes: string
}

const dic: Record<string, string> = {
	characters: 'Personajes',
	locations: 'Locaciones',
	episodes: 'Episodios'
}
function App() {
	const [options, setOptions] = useState<Options>()

	useEffect(() => {
		const getOptions = async () => {
			const data = await fetch(Config.API_URL).then((res) => res.json())
			setOptions(data)
		}
		getOptions()
	}, [])

	return (
		<AppLayout>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '90px',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				{options &&
					Object.entries(options).map((option) => (
						<Link
							to={`/${option[0]}`}
							key={option[1]}
							style={{ border: '2px solid black', padding: '15px', borderRadius: '100px' }}
						>
							{dic[option[0]]}
						</Link>
					))}
			</div>
		</AppLayout>
	)
}

export default App
