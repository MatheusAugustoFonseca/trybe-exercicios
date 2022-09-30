import React, { useState, useEffect } from 'react'

export default function useTimer() {
  const [timer, setTimer] = useState(1);
  const [randomNumber, setRandomNumber] = useState(1);
  const [isMultiple, setIsMultiple] = useState(false)

  const NUM_THREE = 3;
  const NUM_FIVE = 5;
  const REST_BINGO = 4;


  const verifyMultiple = (randomNumber) => {
    if (randomNumber % NUM_THREE === 0 || randomNumber % NUM_FIVE === 0 )
    setIsMultiple(true);
  }

  useEffect(() => {
    verifyMultiple(randomNumber);
  },[randomNumber])

  const MIN_RANDOM = 1;
  const MAX_RANDOM = 100;

  const handleRandom = () => {
    const random = Math.round(Math.floor(Math.random() * MAX_RANDOM) + MIN_RANDOM,) 
  setRandomNumber(random)
  }

  const increaseTimerInterval = () => setTimer((prevState) => prevState + 1);

  const ONE_SEC = 1000;
  const MAX_TIMER = 10;

  useEffect(() => {
    const timerId = setInterval(increaseTimerInterval, ONE_SEC);
    return () => {
      clearInterval(timerId);
    }
  }, []);

  useEffect(() => {
    if (timer > MAX_TIMER) {
      setTimer(1);
      handleRandom();
    } 
    if (timer > REST_BINGO) setIsMultiple(false);
  }, [timer, setTimer])

  return (
    { timer, randomNumber, isMultiple } 
  )
}
