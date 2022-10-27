import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Loader from './components/ui/Loader';
import Auth from './pages/auth';

function App() {
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [loader]);

  return (
    <div className="App">
      {/* <Loader in={loader} /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
      <Auth />
    </div>
  );
}

export default App;
