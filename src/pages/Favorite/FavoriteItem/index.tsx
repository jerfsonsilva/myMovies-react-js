import FavoriteService, { TypeFavoriteItem } from "../../../services/FavoriteService";
import './index.css'
import { AiTwotoneDelete } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export function FavoriteItem(props: { item: TypeFavoriteItem, removeItem: Function }) {
    function removeFavorite() {
        FavoriteService.remove(props.item)
        props.removeItem(props.item)
        toast.success('Favorite removed');
    }
    return (
        <div className=" row col-12 mt-2">
            <div className="col-4 " style={{
                textAlign: "right"
            }}>
                <img src={props.item.foto} style={{
                    height: "50px",
                    objectFit: "fill"
                }} alt="" />
            </div>
            <div className="col-4">
                <Link to={"/movie/" + props.item.id}>
                    {props.item.nome + ' '}
                    <FiExternalLink />
                </Link>
            </div>

            <div className="col-2">
                <AiTwotoneDelete onClick={removeFavorite} style={{
                    fontSize: "20px",
                    color: "red",
                    cursor: "pointer"
                }} />
            </div>
        </div>
    )
} 
