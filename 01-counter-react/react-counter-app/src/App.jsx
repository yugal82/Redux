import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const counter = useSelector(state => state.counter);
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({type: 'INCREMENT'})
  }

  const handleDecrement = () => {
    dispatch({type: 'DECREMENT'})
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <span>Count: {counter}</span>
      <div onClick={() => {
        dispatch({type: 'CHANGE_NAME', payload: 'Name Changed'});
      }}>Created by: {name}</div>
    </div>
  )
}

export default App
