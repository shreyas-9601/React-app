import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement, reset } from '../store/counterSlice';
import { animated, useSpring } from 'react-spring';
import './Counter.css';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const { background } = useSpring({
    background: `rgba(173, 216, 230, ${count / 10})`,
    config: { duration: 300, easing: t => t * t * (3 - 2 * t) },
  });

  return (
    <animated.div style={{ background }} className="counter-container">
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </animated.div>
  );
};

export default Counter;
