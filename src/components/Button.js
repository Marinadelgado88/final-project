import '../stylesheets/components/Button.scss';

const Button = (props) => {
  const handleBackClick = () => {
    props.handleBackClick();
  };

  return (
    <button onClick={handleBackClick} className='button'>
      Inicio de la página
    </button>
  );
};

export default Button;
