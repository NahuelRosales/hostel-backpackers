import { Icon } from "@iconify/react";
import habitaciones from "../../../utils/habitaciones";

import "./style.scss";

const Habitaciones = () => {
    return (
        <section className="section-habitaciones">
            <h2>Conoce nuestras habitaciones</h2>
            <p className="subtitle">
                Contamos con opciones para todos los presupuestos y necesidades
            </p>
            <div className="container-card">
                {habitaciones.map((habitacion, id) => (
                    <div className="card" key={id}>
                        <img className="img-card" src={habitacion.src} alt="" />
                        <h3>{habitacion.name}</h3>
                        <div className="servicios">
                            {habitacion.servicios.map((servicio, i) => (
                                <div className="servicios__servicio" key={i}>
                                    {servicio.src ? (
                                        <img
                                            className="icon"
                                            src={servicio.src}
                                        />
                                    ) : (
                                        <Icon
                                            className="icon"
                                            icon={servicio.icon}
                                        />
                                    )}
                                    <p>{servicio.name}</p>
                                </div>
                            ))}
                        </div>

                        <p className="habitacion-descripcion">{habitacion.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Habitaciones;
