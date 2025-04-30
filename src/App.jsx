import { Link } from "react-router-dom";
import Router from "./components/Router";

function App() {
  return (
    <div className='App'>
      <header>
        <Link to='/login'>로그인</Link>
        <Link to='/signup'>회원가임</Link>
      </header>
      <Router></Router>
    </div>
  );
}

export default App;
