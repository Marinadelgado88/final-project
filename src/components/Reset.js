import '../stylesheets/components/Button.scss';

const Reset = (props) => {
  const handleOnClick = () => {
    props.resetHandler();
  };

  return (
    <button className='card-link' onClick={handleOnClick}>
      Reset
    </button>
  );
};

export default Reset;
