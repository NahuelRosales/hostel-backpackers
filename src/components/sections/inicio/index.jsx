import InicioImg from "../../../../public/inicio-img.png";
import Button from "../../../commons/Button";
import "./style.scss";

const Inicio = () => {
    return (
        <section className="inicio">
            <div>
                <p style={{ fontStyle: "italic" }}>Vive, explora, aprende</p>
                <h1>
                    Bienvenido a<br />
                    Hostel Backpackers
                </h1>
                <p>
                    Si andas buscando el lugar perfecto para descansar, conocer
                    gente y tener aventuras ¡Has encontrado el lugar correcto!
                </p>
            </div>
            <img src={InicioImg} />
            <Button text={"CONTACTANOS"} />
        </section>
    );
};

export default Inicio;
