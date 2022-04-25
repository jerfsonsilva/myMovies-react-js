import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import MovieAPIService from "../../services/MovieAPIService";
import { TypeMovie } from "../Home";
import { useParams, useNavigate } from "react-router-dom";
import { BiHeartCircle } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import FavoriteService, { TypeFavoriteItem } from "../../services/FavoriteService";
import { toast } from 'react-toastify';

export function Movie() {
    let [movieItem, setMovieItem] = useState<TypeMovie>()
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        async function getMovie() {
            if (id) {
                const movieRes: { data: TypeMovie } = await MovieAPIService.getById(id)
                if (!movieRes.data.id) {
                    navigate('/not-found', { replace: true })
                }
                setMovieItem(movieRes.data)
            }
        }
        getMovie()
        return () => {
            console.log('Component desmonted')
        }
    }, [navigate, id])

    const saveFavorite = useCallback(() => {
        if (movieItem) {
            const data: TypeFavoriteItem = {
                id: movieItem.id,
                nome: movieItem.nome,
                foto: movieItem.foto
            }
            let result = FavoriteService.create(data)

            if (result) {
                toast.success('Added', {
                    autoClose: 5000,
                })
            } else {
                toast.warn('Already saved')
            }
        }
    }, [movieItem])
    return (
        <div>
            <Header />
            {movieItem ? (
                <div className="card col-12" >
                    <img className="" style={{
                        height: "400px",
                        objectFit: "fill"
                    }} src={movieItem.foto} alt={movieItem.nome} />
                    <div className="card-body">
                        <h5 className="card-title">{movieItem.nome}</h5>
                        <p className="card-text text-justify movie-item-description">{(movieItem.sinopse)}</p>
                        <div className="text-center row">
                            <a target="_blank" className="col-6" href={"https://www.youtube.com/results?search_query=" + movieItem.nome + " trailer"}>
                                <BsYoutube style={{
                                    fontSize: "30px",
                                    marginRight: "10px"
                                }} />
                            </a>
                            <a className="col-6" onClick={saveFavorite} >
                                <BiHeartCircle style={{
                                    fontSize: "30px",
                                    cursor: "pointer"
                                }} />
                            </a>
                        </div>
                    </div>
                </div>
            ) : <Loading />}
        </div>
    )
} 
