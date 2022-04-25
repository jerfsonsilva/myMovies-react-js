import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import MovieAPIService from "../../services/MovieAPIService";
import { MovieItem } from "./MovieItem";

export type TypeMovie = {
    id: number,
    nome: string,
    foto: string,
    sinopse: string
}

export function HomePage() {
    let [loadingStatus, setLoadingStatus] = useState(false)
    let [listMovie, setListMovie] = useState<Array<TypeMovie>>([])
    useEffect(() => {
        async function getMovies() {
            setLoadingStatus(true);
            const listMovie: { data: Array<TypeMovie> } = await MovieAPIService.getAllMovie()
            setListMovie(listMovie.data)
            setLoadingStatus(false);
        }
        getMovies()
    }, [])
    return (
        <div>
            <Header />
            {loadingStatus && <Loading />}
            <div className="content row" style={{
                paddingLeft: "15px",
                paddingRight: "15px"
            }} >
                {listMovie.map((item, index) => {
                    return (
                        <MovieItem key={index} item={item} />
                    )
                })}
            </div>
        </div>
    )
} 
