import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-[#2a85af] text-[#0b2b3b] shadow-lg">
            <h1 className="text-3xl font-bold">MEEPLETUP LANDING-PAGE</h1>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <a href="/#" className="hover:underline text-red-500">RRSS</a>
                    </li>
                    <li>
                        <a href="/#" className="hover:underline text-yellow-500">Info</a>
                    </li>
                    <li>
                        <a href="/#" className="hover:underline text-green-500">Descargar</a>
                    </li>
                    <li>
                        <a href="/#" className="hover:underline text-purple-500">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
