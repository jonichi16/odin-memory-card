import { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import generateCards from './helpers/cards';

const App = () => {
  const [cards, setCards] = useState(generateCards());
  const [currentCard, setCurrentCard] = useState('');
  const [chosenCards, setChosenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem('bestScore')) || 0
  );

  const handleClick = (e) => {
    e.preventDefault();

    setCurrentCard(e.target.id);
    setCards(generateCards());
  };

  useEffect(() => {
    if (currentCard && !chosenCards.includes(currentCard)) {
      setScore(score + 1);
      setChosenCards([...chosenCards, currentCard]);
    } else {
      setChosenCards([]);
      setScore(0);
      setCurrentCard('');
    }

    return () => {};
  }, [cards]);

  useEffect(() => {
    if (bestScore <= score) {
      setBestScore(score);
    }

    return () => {};
  }, [score]);

  useEffect(() => {
    localStorage.setItem('bestScore', bestScore);
  }, [bestScore]);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main className='container mx-auto w-11/12 py-6 | md:pt-12'>
        <div className='grid grid-cols-2 gap-2 max-w-6xl mx-auto | md:grid-cols-5 md:gap-4'>
          {cards.map((card) => {
            return <Card key={card} image={card} handleClick={handleClick} />;
          })}
        </div>
      </main>
    </>
  );
};

export default App;
