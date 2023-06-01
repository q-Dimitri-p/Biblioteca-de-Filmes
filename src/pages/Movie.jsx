import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import MovieCard from "../components/MovieCard"
import './Movie.css'


const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
    }

    const formatCur = (number) => {
        return number.toLocaleString('en-US', {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() => {
        const movieURL = `${movieURL}${id}?{apiKey}`
        getMovie(movieURL)
    }, [])

    return <div className="movie-page">{movie && <>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
            <h3>
                <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCur(movie).budget}</p>
        </div>

        <div className="info">
            <h3>
                <BsGraphUp /> Faturamento:
            </h3>
            <p>{formatCur(movie).revenue}</p>
        </div>

        <div className="info">
            <h3>
                <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
        </div>

        <div className="info-desc">
            <h3>
                <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
        </div>
    </>}</div>
}

export default Movie