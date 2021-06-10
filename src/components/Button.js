import '../stylesheets/components/Button.scss';

const Button = (props) => {
  const handleBackClick = () => {
    props.handleBackClick();
  };

  return (
    <button onClick={handleBackClick} className='card-link'>
      Inicio de la página
    </button>
  );
};

export default Button;
