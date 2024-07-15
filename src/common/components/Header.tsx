import { Link } from 'wouter'

export default function Header() {
	return (
		<header style={{ padding: '1%', textAlign: 'center' }}>
			<h1>
				💤 Yet Another <Link to='/'>Rick and Morty App</Link> 💤
			</h1>
		</header>
	)
}
