import "../stylesheets/components/Header.scss";
import logo from "../images/logo.png"
import '../stylesheets/components/UserDetail.scss';

const Header = (props) => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
      
            <nav className="main-nav">
              <img src={logo} alt="logo" className="logo"/>
              <ul className="nav">
          
                <li>
                  <a href="#work-process">Ejercicios</a>
                </li>
                <li>
                  <a href="#testimonials">Video</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/marinadelgadoesquinas/">
                    Contact Me
                  </a>
                </li>
              </ul>

              
            </nav>
          </div>
       
    </header>
  );
};
export default Header;
