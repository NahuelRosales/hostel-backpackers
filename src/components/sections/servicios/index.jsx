import { Icon } from "@iconify/react";
import services from "../../../utils/services.js";

import "./style.scss";

const Servicios = () => {
    return (
        <section className="servicios">
            <h2>Descubre el hostel</h2>
            <p className="subtitle">
                Viajar te da historias que contar, queremos ser parte de la tuya
            </p>
            <div className="container">
                {services.map((service, i) => (
                    <div className="container__service" key={i}>
                        <div className="container__service__icon">
                            {service.src ? (
                                <img className="icon" src={service.src} />
                            ) : (
                                <Icon className="icon" icon={service.icon} />
                            )}
                        </div>
                        <p className="container__service__descripcion">{service.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Servicios;
