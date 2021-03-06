import { gcd, getRandomInt } from '../libs/math';

const putRiddleWithAnswer = () => {
  const min = 1;
  const max = 100;
  const intA = getRandomInt(min, max);
  const intB = getRandomInt(min, max);
  const riddle = `${intA} ${intB}`;
  const answer = `${gcd(intA, intB)}`;
  return [riddle, answer];
};

const rule = 'Find the greatest common divisor of given numbers.';

const riddlesWithAnswers = Array.from({ length: 3 }, putRiddleWithAnswer);

const brainGcdGame = {
  rule,
  riddlesWithAnswers,
};

export default brainGcdGame;
