import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { actions } from './store/store';
import { useRef } from 'react';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const addRef = useRef();
  const subRef = useRef();

  const handleIncrement = () => {
    dispatch(actions.increment())
  }

  const handleDecrement = () => {
    dispatch(actions.decrement())
  }

  const handleAdd = () => {
    dispatch(actions.add({num: Number(addRef.current.value)}))
    addRef.current.value = '';
  };

  const handleSub = () => {
    console.log(subRef.current.value);
    dispatch(actions.subtract({num: Number(subRef.current.value)}))
    subRef.current.value = '';
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input ref={addRef} type="text" name="" id="" placeholder='Enter number' />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <input ref={subRef} type="text" name="" id="" placeholder='Enter number' />
        <button onClick={handleSub}>Subtract</button>
      </div>
      <p>Count is: {counter.counterVal}</p>
    </div>
  )
}

export default App
