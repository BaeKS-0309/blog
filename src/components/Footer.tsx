import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

import { BsSun, BsMoonFill } from "react-icons/bs";

export default function Footer() {
  const context = useContext(ThemeContext);

  return (
    <footer>
      <div>
        <Link to='/posts/new'>글쓰기</Link>
        <Link to='/posts'>게시글</Link>
        <Link to='/profile'>프로필</Link>
      </div>
      <div>
        <>{context.theme === "light" ? <BsSun onClick={context.toggleMode} className='footer__theme-btn' /> : <BsMoonFill onClick={context.toggleMode} className='footer__theme-btn' />}</>
      </div>
    </footer>
  );
}
