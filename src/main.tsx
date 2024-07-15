import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, Switch } from 'wouter'

import Pages from './common/pages'
import CharactersPage from './characters/page'
import EpisodesPage from './episodes/page'
import LocationsPage from './locations/page'
import CharacterPage from './characters/[id]/page.tsx'
import EpisodePage from './episodes/[id]/page.tsx'
import LocationPage from './locations/[id]/page.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Switch>
			<Route path={Pages.HOME} component={App} />
			<Route path={Pages.CHARACTERS} component={CharactersPage} />
			<Route path={`${Pages.CHARACTERS}/:id`} component={CharacterPage} />
			<Route path={Pages.LOCATIONS} component={LocationsPage} />
			<Route path={`${Pages.LOCATIONS}/:id`} component={LocationPage} />
			<Route path={Pages.EPISODES} component={EpisodesPage} />
			<Route path={`${Pages.EPISODES}/:id`} component={EpisodePage} />
			<Route>404: Resource not found</Route>
		</Switch>
	</React.StrictMode>
)
