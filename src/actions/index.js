 const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: num
  }
}

const login = () => {
  return {
    type: 'SIGN_IN'
  }
}

export {decrement,increment,login}