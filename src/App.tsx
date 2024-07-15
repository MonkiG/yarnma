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
function App() {
	const [options, setOptions] = useState<Options>()

	useEffect(() => {
		const getOptions = async () => {
			const data = await fetch(Config.API_URL).then((res) => res.json())
			setOptions(data)
		}
		getOptions()
	}, [])

	console.log(options)
	return (
		<AppLayout>
			{options &&
				Object.entries(options).map((option) => (
					<div key={option[1]}>
						<Link to={`/${option[0]}`}>{option[0]}</Link>
					</div>
				))}
		</AppLayout>
	)
}

export default App
