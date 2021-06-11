import "../stylesheets/components/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ul className="social">
              <li>
                <a href="https://twitter.com/_MarinaDelgado_">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/marinadelgadoesquinas/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Marinadelgado88">
                  <i className="fa fa-rss"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright">Copyright &copy; 2021 @Marinadelgado</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
