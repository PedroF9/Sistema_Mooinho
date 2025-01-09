import { Link } from "react-router-dom"

export default function NavBar2() {

    return (

        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">Home</Link>
                </div>

                <div className="navbar-end">
                    <a id="bt1" className="btn mx-2">Novo Colaborador</a>
                </div>
            </div>
        </>
    )

}