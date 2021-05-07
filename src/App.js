import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import secrets from './secrets'
import SingleMoviePreview from './SingleMoviePreview'
import film from './film.png'


function App() {
  const storageKey = 'shopifyNominations'
  //JSON.stringify()
  //JSON.parse()

  // Variables for the movies returned by our search, the search term, and the profile for the single movie to view
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [nominations, setNominations] = useState(window.localStorage.getItem(storageKey) ? 
    JSON.parse(window.localStorage.getItem(storageKey)) :
    [])

  useEffect(() => {
    console.log(nominations)
    const storage = window.localStorage
    storage.setItem(storageKey, JSON.stringify(nominations))
  }, [nominations])
  
  useEffect(() => {
    const handleChange = async () => {
      try {
        const searchStr = `http://www.omdbapi.com/?apikey=${secrets.apiKey}&type=movie&page=1&s=${searchTerm}`
        const {data} = await axios.get(searchStr) 
        if (data.Response === 'True') {
          console.log(data.Search)
          setMovies(data.Search)
        }

      } catch (error) {
        console.log('Error: ', error)
      }
    }
    if (searchTerm.length) handleChange()
    else setMovies([]) // Resets to empty when no search term present
  }, [searchTerm])



  return (
    <div className="App">
      <div id='titleBar'>
        <div id='titleBarContents'>
          <div id='titleLogo'>
            <img width="50" src={film} alt="atom"/>
            <h3 id="titleText">Movie DB Search</h3>

          </div>
        <a 
          href="https://github.com/PeterCrosta/YearOne_TakeHome" 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <img 
            src='https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png' 
            alt='github logo' 
            className="githubIcon"
            />
        </a>
        </div>
      </div>
      <form 
        className="searchBar"
      >
        <input 
          type="text"
          className="searchBarInput" 
          placeholder="Enter movie name" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} // Handled with useEffect
          />
      </form>

      {movies.map((movie, idx) => (
        <SingleMoviePreview
          movie={movie}
          idx={idx}
          setNominations={setNominations}
          nominations={nominations}
       />))}
    </div>
  );
}

export default App;
