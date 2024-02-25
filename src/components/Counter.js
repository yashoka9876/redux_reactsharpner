import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter=useSelector((state)=>state.counter);
 const dispatch= useDispatch();

 const increament=()=>{
  dispatch({type:'increament',payload:5})
 }
 const decrement=()=>{
  dispatch({type:'decrement',payload:5})
 }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increament}>increament</button>
        <button onClick={decrement}> decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
