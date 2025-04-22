import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import ThemeContext from "context/ThemeContext";
import { FiSun, FiMoon, FiGithub } from "react-icons/fi";
import { PiHamburger, PiArrowRight } from "react-icons/pi";

export default function Header() {
  const context = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(true);
  const [hamburgerToggleIcon, setHamburgerToggleIcon] = useState<boolean>(false);

  const headerRef = useRef<any>(null);
  const headerGnbRef = useRef<any>(null);
  const headerUtilsRef = useRef<any>(null);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsMobile(true);
      headerRef.current.style.setProperty("height", "70px");
      headerGnbRef.current.style.setProperty("visibility", "visible");
      headerUtilsRef.current.style.setProperty("visibility", "visible");
      console.log(window.innerWidth);
    } else {
      setIsMobile(false);
      headerRef.current.style.setProperty("height", "70px");
      headerGnbRef.current.style.setProperty("visibility", "hidden");
      headerUtilsRef.current.style.setProperty("visibility", "hidden");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setIsMobile(true);
        setHamburgerToggleIcon(true);
      } else {
        setIsMobile(false);
        setHamburgerToggleIcon(false);
      }
    });
  }, [isMobile]);

  const hamburgerHandler = () => {
    if (hamburgerToggleIcon) {
      setHamburgerToggleIcon(false);
      headerRef.current.style.setProperty("height", "70px");
      headerGnbRef.current.style.setProperty("visibility", "hidden");
      headerUtilsRef.current.style.setProperty("visibility", "hidden");
    } else {
      setHamburgerToggleIcon(true);
      headerRef.current.style.setProperty("height", "100%");
      headerGnbRef.current.style.setProperty("visibility", "visible");
      headerUtilsRef.current.style.setProperty("visibility", "visible");
    }
  };

  return (
    <header ref={headerRef} className={"header " + (isMobile ? "pc" : "mobile")}>
      <div className='header__wrap'>
        <Link to='/' className='header__logo'>
          Blog
        </Link>

        <div ref={headerGnbRef} className='header__gnb'>
          <Link to='/posts/new'>Blog</Link>
          <Link to='/posts'>Project</Link>
          <Link to='/profile'>About Me</Link>
        </div>
        <div ref={headerUtilsRef} className='header__utils'>
          <Link
            to='https://github.com/BaeKS-0309/blog'
            className='header__utils__git'
            target='_blank'
          >
            <FiGithub />
          </Link>
          <>
            {context.theme === "light" ? (
              <FiMoon onClick={context.toggleMode} className='header__utils__theme-btn' />
            ) : (
              <FiSun onClick={context.toggleMode} className='header__utils__theme-btn' />
            )}
          </>
        </div>

        <div className='header__hamburger'>
          <div className='header__hamburger__icon' onClick={() => hamburgerHandler()}>
            {hamburgerToggleIcon ? (
              <PiArrowRight className='header__hamburger-btn' />
            ) : (
              <PiHamburger className='header__hamburger-btn' />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
