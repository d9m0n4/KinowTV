import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './pages/main';
import Auth from './pages/auth';
import Film from './pages/film';
import Person from './pages/person';
import Loader from './components/shared/Loader';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
