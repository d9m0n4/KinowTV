import React from 'react';
import Loader from './components/ui/Loader';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [loader]);
  return (
    <div className="App">
      <Loader />
    </div>
  );
}

export default App;
