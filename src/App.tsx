import React from 'react';
import Header from './components/layout/Header';
import Loader from './components/ui/Loader';

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
    </div>
  );
}

export default App;
