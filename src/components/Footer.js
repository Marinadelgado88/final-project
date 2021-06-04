import '../stylesheets/components/Footer.scss';
const Footer = () => {
  return (
    <footer className='footer'>
      <small className='footer__text'>2021 @Marinadelgado</small>
      <nav>
        <a
          href='https://github.com/Marinadelgado88'
          className='footer__github'
          title='GitHub'
          target='_blank'
        >
          <i className='fab fa-github footer__github--icon'></i>
        </a>
        <a
          href='https://twitter.com/_MarinaDelgado_'
          className='footer__twitter'
          title='Twitter'
          target='_blank'
        >
          <i className='fab fa-twitter footer__twitter--icon'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/marinadelgadoesquinas/'
          className='footer__linkedin'
          title='Linkedin'
          target='_blank'
        >
          <i className='fab fa-linkedin footer__linkedin--icon'></i>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
