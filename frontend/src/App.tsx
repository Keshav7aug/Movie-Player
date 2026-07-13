import './App.css'
import MovieCard from './components/MovieCard'
function App() {

  return (
    <>
    <Text display="Hello"/>
    <Text display="World"/>
    <MovieCard title="Peter and Pedro" url="" release_date="2024"></MovieCard>
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
