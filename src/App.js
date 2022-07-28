import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, login} from './actions/index'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <h2>{isLogged ? 'logged in' : 'not logged in'}</h2>
      <button onClick={() => dispatch(login())}>{isLogged ? "sign out" : "login"}</button>
    </div>
  );
}

export default App;
