const getRandomNum = () => Math.ceil(Math.random() * 25);

const generateCards = () => {
  const arr = [];

  while (arr.length < 10) {
    const num = getRandomNum();
    const card = num < 10 ? `00${num}` : `0${num}`;

    if (!arr.includes(card)) {
      arr.push(card);
    }
  }

  return arr;
};

export default generateCards;
