import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import generateCards from './helpers/cards';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentCard, setCurrentCard] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentCard(e.target.id);

    if (e.target.id !== currentCard) {
      setScore(score + 1);
    } else {
      setScore(0);
    }
  };

  console.log(currentCard);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main className='container mx-auto w-11/12 py-6 | md:pt-12'>
        <div className='grid grid-cols-2 gap-2 max-w-6xl mx-auto | md:grid-cols-5 md:gap-4'>
          {generateCards().map((card) => {
            return <Card key={card} image={card} handleClick={handleClick} />;
          })}
        </div>
      </main>
    </>
  );
};

export default App;
