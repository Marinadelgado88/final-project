import "../stylesheets/components/Header.scss";
import logo from "../images/logo.png"

const Header = (props) => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
      
            <nav className="main-nav">
              <img src={logo} alt="logo" className="logo"/>
              <ul className="nav">
          
                <li>
                  <a href="https://marinadelgado88.github.io/CMV-public/">Ejercicios</a>
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
