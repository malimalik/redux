import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle",
    });
  };

  const dispatch = useDispatch();
  const result = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({
      type: "increment",
    });
  };

  const increaseHandler = () => {
    dispatch({
      type: "increase",
      amount: 10,
    });
  };
  const decrementHandler = () => {
    dispatch({
      type: "decrement",
    });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{result}</div>}
      <div>
        <button type="button" onClick={incrementHandler}>
          Increment
        </button>
        <button type="button" onClick={decrementHandler}>
          Decrement
        </button>
        <button type="button" onClick={increaseHandler}>
          Increase by 10
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
