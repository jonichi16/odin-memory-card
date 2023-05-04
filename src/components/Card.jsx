import PropTypes from 'prop-types';

const Card = ({ image, handleClick }) => {
  return (
    <button onClick={handleClick}>
      <img id={image} src={`./public/assets/images/${image}.png`} alt='Card' />
    </button>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Card;
