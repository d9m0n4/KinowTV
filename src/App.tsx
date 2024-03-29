import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Footer, Header } from './components/layout';
import Loader from './components/shared/Loader';
import { Auth, Cartoons, Film, Main, NotFound, Person } from './pages';
import { Films } from './pages/films';
import { NewFilms } from './pages/newFilms';
import { Serials } from './pages/serials';

function App() {
	const [loader, setLoader] = React.useState(true);

	const { pathname } = useLocation();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	React.useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 2000);
	}, [loader]);

	return (
		<div className="App">
			<Loader in={loader} />
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/film/:id" element={<Film />} />
				<Route path="/person/:id" element={<Person />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/cartoons" element={<Cartoons />} />
				<Route path="/tv_series" element={<Serials />} />
				<Route path="/new" element={<NewFilms />} />
				<Route path="/films" element={<Films />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
