import { Link } from "react-router-dom";
import "./Header.scss";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

import { FiSun, FiMoon, FiGithub } from "react-icons/fi";

export default function Header() {
  const context = useContext(ThemeContext);

  return (
    <header className='header'>
      <div className='header__wrap'>
        <Link to='/' className='header__logo'>
          Blog
        </Link>
        <div className='header__gnb'>
          <Link to='/posts/new'>Blog</Link>
          <Link to='/posts'>Project</Link>
          <Link to='/profile'>About Me</Link>
        </div>
        <div className='header__utils'>
          <Link to='https://github.com/BaeKS-0309/blog' className='header__utils_git' target='_blank'>
            <FiGithub />
          </Link>
          <>{context.theme === "light" ? <FiMoon onClick={context.toggleMode} className='header__utils__theme-btn' /> : <FiSun onClick={context.toggleMode} className='header__utils__theme-btn' />}</>
        </div>
      </div>
    </header>
  );
}
