import { Link } from "react-router-dom";
import { useRef } from "react";



const NavBar = ({ themeMode, setThemeMode }) => {
  const changeMode = () => {
    const modes = {
      0: "Light",
      1: "Dark",
    };
    setThemeMode(modes[(Object.values(modes).indexOf(themeMode) + 1) % 2]);
  };

  const hamburgerMenuSvg = (
    <svg
      class="hamburger-menu"
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
            <ul className="navbar-items" ref={navbarItemsRef}>
              <li>
                <Link to="/timeihaveleft" className="navbar-item">
                  Time I Have Left
                </Link>
              </li>
            </ul>
            {/* <ClickAwayListener onClickAway={() => {
              navbarItemsRef.current.classList.remove("display-vertical-nav-items");
            }}> */}
            <button
              class="hamburger-menu navbar-item"
              onClick={() => {
                navbarItemsRef.current.classList.toggle("display-vertical-nav-items");
              }}
            >
              {hamburgerMenuSvg}
            </button>
            {/* </ClickAwayListener> */}
          </nav>
        </div>
      </div>
      <button
        type="button"
        className="theme-mode"
        onClick={() => {
          changeMode();
        }}
      >
        {themeMode} Mode
      </button>
    </>
  );
};

export default NavBar;


/*
Source: 
- CSS Theme Switcher by Reverse-Engineering Alligator.io: https://youtu.be/rXuHGLzSmSE
- Faire une Navbar Responsive en HTML & CSS - Expliqué de A à Z avec Menu Hamburger: https://www.youtube.com/watch?v=HQopEEurQYE
*/