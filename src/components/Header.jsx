import PropTypes from 'prop-types';

const Header = ({ score, bestScore }) => {
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto w-11/12 py-2 flex items-center'>
        <h1 className='text-slate-50 text-xl font-bold flex-1 | md:text-2xl'>
          Memory Game
        </h1>
        <div className='text-slate-50 text-xs | md:text-base'>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number,
};

export default Header;
