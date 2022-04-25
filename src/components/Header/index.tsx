import { Link, useLocation } from "react-router-dom"
import { BiHeartCircle, BiSearchAlt, BiMoviePlay, BiMeteor } from 'react-icons/bi'
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { ToastContainer } from "react-toastify";

type TypeListRoute = Array<{
    name: string,
    url: string,
    icon: IconType
}>
const routesLink: TypeListRoute = [
    {
        name: 'Home',
        url: '/',
        icon: BiMoviePlay
    },
    {
        name: 'Favorites',
        url: '/favorites',
        icon: BiHeartCircle
    }
]
export default function Header() {
    const [currentRoute, setCurrentRoute] = useState<string>(useLocation().pathname)
    console.log('Header rendered')
    return (
        <div className="App mb-3">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand"><BiMeteor /> MyMovie</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {routesLink.map((item, index) => {
                                return (
                                    <Link key={index} className={"nav-link " + (currentRoute === item.url && 'active')} aria-current="page" to={item.url}>{<item.icon />} {item.name}</Link>
                                )
                            })}
                        </div>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Movie..." aria-label="Search" />
                        <button className="btn btn-outline-info col-3" type="submit">Search <BiSearchAlt /></button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
