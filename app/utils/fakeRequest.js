import challenges from '@data/challenges.json';

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const fetchChallenges = async () => {
  await sleep(500);
  return challenges;
};
