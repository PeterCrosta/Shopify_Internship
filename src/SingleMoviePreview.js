function SingleMoviePreview(props) {
    const {Title, Poster, imdbID} = props.movie
    const {idx, setNominations, nominations, finished} = props
    return (
      <div 
        key={idx} 
        className="singleMoviePreviewContainer" 
        // onClick={() => setSingleMovie(movies[idx])} // Loads the SingleMovie component
      >
        <img 
          src={Poster === "N/A" ?
            "https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg" :
            Poster} 
          width='100' 
          alt="movie poster" 
          className="posterPreview" 
        />
        <div className="titleAboutConatiner" >
          <h3 
            className="titlePreview"
          >{Title}</h3>
          {nominations.find(el => el.imdbID === imdbID) ? (
            <button
            type='button'
            className="addNominationButton"
            // disabled={nominations.length === 5}
            onClick={() => {
              const i = nominations.findIndex(el => {
                return el.imdbID === imdbID
              })
              setNominations([...nominations.slice(0,i),...nominations.slice(i+1)])
            }}
            >Remove</button>
            ) : (
            <button 
              type='button' 
              className="addNominationButton"
              disabled={finished}
              onClick={() => {
                console.log(props.movie)
                setNominations([...nominations,props.movie])
              }}
            >Add</button>
          )}
        </div>
      </div>
    )
  }

  export default SingleMoviePreview