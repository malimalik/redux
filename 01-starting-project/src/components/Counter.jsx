import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle",
    });
  };

  const dispatch = useDispatch();
  const result = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
    // The above will return a an object in the following format
    // {
    //   type: SOME_UNIQUE_IDENTIFIER,
    //   payload: 10
    // }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{result.counter}</div>
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
