function SingleMoviePreview(props) {
    const {Title, Poster} = props.movie
    const {idx} = props
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
          <p className="overviewPreview"></p>
        </div>
      </div>
    )
  }

  export default SingleMoviePreview