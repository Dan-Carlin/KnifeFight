import { useState } from "react";

const useCounter = (initialHp) => {
  const [count, setCount] = useState(initialHp);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return {
    count,
    setCount,
    increaseCount,
    decreaseCount,
  };
};

export default useCounter;
