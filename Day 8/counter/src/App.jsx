import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
      <div className="card">
        <h1>hey</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
  )
}

export default App
