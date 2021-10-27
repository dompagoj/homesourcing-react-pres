import { atom, useAtom } from 'jotai'

const countAtom = atom(0)
const incrementCountAtom = atom(null, (get, set) => set(countAtom, get(countAtom) + 1))

export const JotaiExample2 = () => {
  return (
    <>
      <DisplayCounter />
      <IncrementCounter />
    </>
  )
}

const DisplayCounter = () => {
  const [count] = useAtom(countAtom)

  console.log('Display counter render')

  return <span>Counter: {count}</span>
}

const IncrementCounter = () => {
  const [, increment] = useAtom(incrementCountAtom)

  console.log('Increment counter rerender')

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
