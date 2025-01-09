import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import '../App.css'

export default function NavBar1({ setSearchTerm }) {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setSearchTerm(inputValue);
        [inputValue, setSearchTerm];

    })


    {/*const handleSearch = () => {
        setSearchTerm(inputValue);
      };*/}

    return (

        <div className="navbar bg-primary-100 mb-2">
            <div className="navbar-start">
                {/**/}
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
                {/**/}
            </div>

            <div className="join">
                <div>
                    <div>
                        <input className="input input-bordered join-item navbar-center" placeholder="Pesquisar" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className="navbar-end">
            </div>
        </div>
    )
}