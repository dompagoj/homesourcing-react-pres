import { atom, useAtom } from 'jotai'

const countAtom = atom(0)

export const JotaiExample = () => {
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
  const [, setCount] = useAtom(countAtom)

  console.log('Increment counter rerender')

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
