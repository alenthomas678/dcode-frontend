import React, { useState, useCallback } from "react";

const ActivityContext = React.createContext({
  q3h1: false,
  q4h1: false,
  q5h1: false,
  q6h1: false,
  score: 0,
  useScore: () => {},
  useQ3Hint1: () => {},
  useQ4Hint1: () => {},
  useQ5Hint1: () => {},
  useQ6Hint1: () => {},
});

export const ActivityContextProvider = (props) => {
  const [q3h1, setq3h1] = useState(false);
  const [q4h1, setq4h1] = useState(false);
  const [q5h1, setq5h1] = useState(false);
  const [q6h1, setq6h1] = useState(false);
  const [score, setScore] = useState(0);

  const useQ3Hint1Handler = useCallback(() => {
    setq3h1(true);
  }, []);

  const useQ4Hint1Handler = useCallback(() => {
    setq4h1(true);
  }, []);

  const useQ5Hint1Handler = useCallback(() => {
    setq5h1(true);
  }, []);

  const useQ6Hint1Handler = useCallback(() => {
    setq6h1(true);
  }, []);

  const useScoreHandler = (value) => {
    setScore(value);
  };

  const contextValue = {
    q3h1: q3h1,
    q4h1: q4h1,
    q5h1: q5h1,
    q6h1: q6h1,
    score: score,
    useScore: useScoreHandler,
    useQ3Hint1: useQ3Hint1Handler,
    useQ4Hint1: useQ4Hint1Handler,
    useQ5Hint1: useQ5Hint1Handler,
    useQ6Hint1: useQ6Hint1Handler,
  };

  return (
    <ActivityContext.Provider value={contextValue}>
      {props.children}
    </ActivityContext.Provider>
  );
};

export default ActivityContext;
