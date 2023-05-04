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
    console.log(currentCard);
  };

  console.log(generateCards());

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main>
        <div>
          {generateCards().map((card) => {
            return <Card key={card} image={card} handleClick={handleClick} />;
          })}
        </div>
      </main>
    </>
  );
};

export default App;
