import { useCallback, useEffect, useRef, useState } from "react";
const useCountDown = (duration, onComplete) => {
  const [time, setTime] = useState(duration);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (time <= 0) {
      onCompleteRef.current?.();
      return;
    }

    const intervalId = setInterval(() => {
      setTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const reset = useCallback(() => {
    setTime(duration);
  }, [duration]);

  const hour = String(Math.floor(time / 3600)).padStart(2, "0");

  const minute = String(
    Math.floor((time % 3600) / 60)
  ).padStart(2, "0");

  const second = String(time % 60).padStart(2, "0");

  return {
    hour,
    minute,
    second,
    reset,
  };
};

export default useCountDown;