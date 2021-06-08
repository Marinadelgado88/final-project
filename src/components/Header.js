import '../stylesheets/components/Header.scss';
const Header = props =>{

  
  return (
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                      
                        <ul class="nav">
                            <li><a href="#welcome" class="active">Home</a></li>
                            
                            <li><a href="#work-process">Ejercicios</a></li>
                            <li><a href="#testimonials">Video</a></li>
                            <li><a href="#contact-us">Contact Me</a></li>
                        </ul>
                       
                            <span>Menu</span>
                       
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Header;