import React from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Loader from './components/ui/Loader';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

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
      <Header />
      <Main />
    </div>
  );
}

export default App;
