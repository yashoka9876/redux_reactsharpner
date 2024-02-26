import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';


const Counter = () => {
  const counter=useSelector((state)=>state.counter.counter);
 const dispatch= useDispatch();

 const increamentHandler=()=>{
  dispatch(counterActions.increment());
 }
 const increaseHandler=()=>{
  dispatch(counterActions.increase(10));
 }
 const decrementHandler=()=>{
  dispatch(counterActions.decrement());
 }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>increament</button>
        <button onClick={increaseHandler}>increament by amount</button>
        <button onClick={decrementHandler}> decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
