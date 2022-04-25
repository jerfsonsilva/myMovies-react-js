import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import FavoriteService, { TypeFavoriteItem } from "../../services/FavoriteService";
import { FavoriteItem } from "./FavoriteItem";

export function Favorite() {
    let [listMovie, setListMovie] = useState<Array<TypeFavoriteItem>>([])
    const removeItem = (item: TypeFavoriteItem) => {
        let newFavorites = listMovie.filter((element) => {
            return element.id !== item.id
        })
        setListMovie(newFavorites)
    }
    useEffect(() => {
        async function getMovies() {
            setListMovie(FavoriteService.getAll())
        }
        getMovies()
    }, [])
    return (
        <div>
            <Header />
            <div className="content row text-center" >
                {listMovie.map((item, index) => {
                    return (
                        <FavoriteItem item={item} key={index} removeItem={removeItem} />
                    )
                })}
            </div>
        </div>
    )
} 
