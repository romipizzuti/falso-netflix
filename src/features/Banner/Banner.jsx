import { useEffect, useState } from "react"
import "./banner.css"


export const Banner = ({movies}) => {

  const [movie, setMovie] = useState({})

  
  const setRandomMovie = ()  =>{
    const i= Math.floor(Math.random()*movies.length)
    setMovie (movies[i])
  }

  useEffect(() => {
    setRandomMovie()
    const timer = setInterval(() =>{
      setRandomMovie()
    }, 7000)
    return () => clearInterval(timer);
  },[])
  
  return (
  
  <div className="contenedor">
    <img src={movie.backdropHigh} className="card-img w-100 m-0 p-0" alt={`Imagen de ${movie.title}`}/>
    <div className="card-img-overlay miBanner" >
      <div className="fill-container">
        <p className="card-text text-left opacityBackground p-3"><h1>{movie.title}</h1><br/>{movie.description}</p>
      </div>
    </div>
  </div>
  
  )
}