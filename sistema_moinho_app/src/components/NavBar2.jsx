import { Link } from "react-router-dom"

export default function NavBar2() {

    return (

        <>
            <div className="navbar bg-base-100">

            <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-ghost text-xl drawer-button">Teste</label>
                    </div>
                    <div className="drawer-side" style={{ zIndex: 1000 }}>
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><Link to='/' id="bt1d" className="btn mx-2" >Home</Link></li>
                            <li><Link to='/colEsp' id="bt2d" className="btn mx-2" >Especialidades</Link></li>
                            <li><Link to='/inv' id="bt3d" className="btn mx-2" >Inventario</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">

                </div>
            </div>
        </>
    )

}