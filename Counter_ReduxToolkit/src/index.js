import { configureStore, createSlice } from '@reduxjs/toolkit'

const result = document.getElementById('count')
const buttons = document.querySelectorAll('button')

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      state.value -= 1
    },
    reset(state) {
      state.value = 0
    },
  },
})

const store = configureStore({ reducer: counterSlice.reducer })

result.innerHTML = store.getState().value

store.subscribe(() => (result.innerHTML = store.getState().value))

buttons[0].addEventListener('click', () =>
  store.dispatch(counterSlice.actions.increment())
)
buttons[1].addEventListener('click', () =>
  store.dispatch(counterSlice.actions.decrement())
)
buttons[2].addEventListener('click', () =>
  store.dispatch(counterSlice.actions.reset())
)
