import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

export default function NavBar1({ OnOpen1, setSearchTerm }) {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setSearchTerm(inputValue);
        [inputValue, setSearchTerm];

    })


    {/*const handleSearch = () => {
        setSearchTerm(inputValue);
      };*/}

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Teste</a>
            </div>

            <div className="join">
                <div>
                    <div>
                        <input className="input input-bordered join-item" placeholder="Pesquisar" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    </div>
                </div>
                {/*<select className="select select-bordered join-item">
                    <option disabled selected>Filtro</option>
                    <option>Pessoa</option>
                    <option>Especialidade</option>
                </select>

                <div className="indicator">
                    <button className="btn join-item" onClick={handleSearch}>Pesquisar</button>
                </div>*/}
            </div>

            <div className="navbar-center hidden lg:flex">
                {/*<ul className="menu menu-horizontal px-1">
        <li><a>Item 1</a></li> 
        <li>
            <details>
            <summary>Parent</summary>
            <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
            </details>
        </li>
        </ul>*/}
            </div>
            <div className="navbar-end">
                <a id="bt1" className="btn mx-2" onClick={() => OnOpen1('mode2')}>Novo Colaborador</a>
                <Link to='/colEsp' id="bt2" className="btn mx-2" >Especialidades</Link>
            </div>
        </div>
    )
}