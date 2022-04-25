import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TypeMovie } from "..";
import './index.css'

export function MovieItem(props: { item: TypeMovie }) {
    return (
        <div className=" col-4 movie-card">
            <img className="card-img-top" src={props.item.foto} alt={props.item.nome} />
            <div className="card-body">
                <h5 className="card-title">{props.item.nome}</h5>
                <p className="card-text text-justify movie-item-description">{(props.item.sinopse).substring(0, 100)}...</p>
                <div className="text-center row">
                    <Link to={"/movie/" + props.item.id} >See more <BiLinkExternal /> </Link>
                </div>
            </div>
        </div>
    )
} 
