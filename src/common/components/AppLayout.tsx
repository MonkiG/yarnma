import Footer from './Footer'
import Header from './Header'

type Props = {
	children: React.ReactNode
}
export default function AppLayout({ children }: Props) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
