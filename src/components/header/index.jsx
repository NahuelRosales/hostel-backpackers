import { useState } from "react";
import { Icon } from "@iconify/react";

import "./style.scss";

const Header = () => {
    const [showMenuBar, setShowMenuBar] = useState(false);

    return (
        <header className={`${showMenuBar ? "hiddenMenuBar" : "showMenuBar"}`}>
            <Icon
                className={`" icon " ${
                    showMenuBar ? "hiddenMenuBar" : "showMenuBar"
                }`}
                icon="material-symbols-light:menu"
                onClick={() => setShowMenuBar(!showMenuBar)}
            />
            {showMenuBar ? <div className="bg" onClick={() => setShowMenuBar(!showMenuBar)}></div> : null}

            <nav className={` ${showMenuBar ? "menuBar" : "hiddenMenuBar"}`}>
                <div
                    className="top-menu-bar"
                >
                    <Icon
                        className="icon close-menu"
                        icon="material-symbols-light:close"
                        onClick={() => setShowMenuBar(!showMenuBar)}
                    />
                    <p className="title">Hostel Backpackers</p>
                </div>
                <ul>
                    <li>
                        <Icon className="icon" icon="fluent:home-24-regular" />
                        <p>Inicio</p>
                    </li>
                    <li>
                        <Icon className="icon" icon="lucide:bed" />
                        <p>Habitaciones</p>
                    </li>
                    <li>
                        <Icon className="icon" icon="bx:map" />
                        <p>Mapa</p>
                    </li>
                    <li>
                        <Icon className="icon" icon="solar:gallery-broken" />
                        <p>Galeria</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
