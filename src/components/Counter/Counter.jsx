import { useEffect, useState, useReducer } from 'react'

const yellow= 'rgb(236, 222, 153)'
const initialCount = 0

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1

    case 'DECREMENT':
      return state - 1

    case 'RESET':
      return 0

    default:
      return state;
  }
};

const colorReducer = (color, action) => {
  switch (action.type) {
    case 'COLOR':
      return { color: action.payload.color }
    default:
      return color;
  }
};
export default function Counter() {
  // const [count, setCount] = useState(0)
  // const [currentColor, setCurrentColor] = useState(pinkRGB)

  const [currentColor, dispatch] = useReducer(colorReducer, yellow)
  const [count, dispatchCount] = useReducer(countReducer, initialCount)

  useEffect(() => {
    if (count === 0) {
      // setCurrentColor(pinkRGB)
      dispatch({ type: 'COLOR', payload: { color: (yellow) } })
    }

    if (count > 0) {
      // setCurrentColor(`rgb(52, 211, 153)`)
      dispatch({ type: 'COLOR', payload: { color: `rgb(52, 211, 153)` } })
    }

    if (count < 0) {
      // setCurrentColor(`rgb(239, 68, 68)`)
      dispatch({ type: 'COLOR', payload: { color: `rgb(239, 68, 68)` } })
    }
  }, [count])

  const increment = () => {
    // setCount((prevState) => prevState + 1)
    dispatchCount({ type: 'INCREMENT' })
  }

  const decrement = () => {
    // setCount((prevState) => prevState - 1)
    dispatchCount({ type: 'DECREMENT' })
  }

  const reset = () => {
    // setCount(0)
    dispatchCount({ type: 'RESET' })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor.color }}>
        {count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
