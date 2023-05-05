import PropTypes from 'prop-types';

const Card = ({ image, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className='py-8 px-2 border-4 rounded border-amber-400 shadow-lg hover:scale-90'
    >
      <img id={image} src={`./assets/images/${image}.png`} alt='Card' />
    </button>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Card;
