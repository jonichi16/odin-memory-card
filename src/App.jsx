import { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
    </>
  );
};

export default App;
