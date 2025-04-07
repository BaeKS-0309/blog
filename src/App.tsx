
import { useEffect, useState, useContext } from 'react';
import { app } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { ToastContainer } from 'react-toastify';
import ThemeContext from 'context/ThemeContext';

import Router from 'components/Router';
import Loader from 'components/Loader';

function App() {
  const context = useContext(ThemeContext)
  const auth = getAuth(app)

  const [init, setInti] = useState<boolean>(false)

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
      setInti(true)
    })
  }, [auth])

  return (
    <div className={context.theme === 'light' ? 'white' : 'dark'}>
      <ToastContainer />
      {init ?  <Router isAuthenticated={isAuthenticated}/> : <Loader />}
    </div>
  );
}

export default App;
