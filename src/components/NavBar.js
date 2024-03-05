import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "./utils.js";

const ThemeIcon = () => {
  const [darkThemeEnabled, changeTheme] = useDarkMode();
  const handleThemeButton = () => {
    changeTheme(!darkThemeEnabled);
  };

  return (
    <span onClick={handleThemeButton} className="navigation-icon">
      {darkThemeEnabled ? <FaMoon size="24" /> : <FaSun size="24" />}
    </span>
  );
};

const NavBar = () => {
  const hamburgerMenuSvg = (
    <svg
      className="hamburger-menu"
      width="30px"
      height="30px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#6f7380" />
      <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#6f7380" />
      <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#6f7380" />
    </svg>
  );
  const navbarItemsRef = useRef(null);

  return (
    <>
      <div className="navbar-container">
        <div className="standard-width">
          <nav>
            <Link to="/" className="navbar-item brand text-align-left">
              Home
            </Link>
            <li className="navbar-item-about-author">
              <a
                href="https://rodonguyen.dev/"
                className="navbar-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                About author
              </a>
            </li>
            <ThemeIcon /> {/* Dark Theme Toggle Button */}
            <ul className="navbar-items" ref={navbarItemsRef}>
              <li>
                <Link to="/time-i-have-left" className="navbar-item">
                  Time I Have Left
                </Link>
              </li>
              <li>
                <Link
                  to="/happy-birthday-homie?c=rodo8888"
                  className="navbar-item"
                >
                  Happy Birthday Homie
                </Link>
              </li>
            </ul>
            <button
              className="hamburger-menu"
              onClick={() => {
                navbarItemsRef.current.classList.toggle(
                  "display-vertical-nav-items",
                );
              }}
            >
              {hamburgerMenuSvg}
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;

/*
Source: 
- CSS Theme Switcher by Reverse-Engineering Alligator.io: https://youtu.be/rXuHGLzSmSE
- Faire une Navbar Responsive en HTML & CSS - Expliqué de A à Z avec Menu Hamburger: https://www.youtube.com/watch?v=HQopEEurQYE
*/
