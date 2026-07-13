import './App.css'

function App() {

  return (
    <>
    <Text display="Hello"/>
    <Text display="World"/>
    </>
  )
}

function Text({display}: {display: string}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
