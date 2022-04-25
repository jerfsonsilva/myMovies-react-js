import { Link } from "react-router-dom"
import Header from "../../../components/Header"
export function NotFound() {
    return (
        <>
            <Header />
            <div className="row text-center">
                <div className="col-12">
                    <h2>404</h2>
                    <h4>I'm sorry but that page was not found!!!</h4>
                    <p>
                        You can access the home:
                        <Link to="/" >Home</Link>
                    </p>
                </div>
                <div className="col-12">
                    <img src='/img/notFound.jpg' style={{
                        height: "28%"
                    }} className="img-fluid" alt="" />
                </div>
            </div>
        </>
    )
} 
