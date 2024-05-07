import imgHabitacion1 from "../../public/imgHabitacion1.svg";
import imgHabitacion2 from "../../public/imgHabitacion2.svg";
import imgHabitacion3 from "../../public/imgHabitacion3.svg";
import iconUser from "../../public/iconUser.svg";
import iconAC from "../../public/iconAC.svg";

const habitaciones = [
    {
        name: "Habitación compartida",
        src: imgHabitacion1,
        servicios: [
            { name: "Lockers", icon: "mdi:locker" },
            { name: "x8", src: iconUser },
            { name: "A/C", src: iconAC },
            { name: "Baño compartido", icon: "mingcute:shower-line" },
        ],
        descripcion:
            "Descubre nuestra <b> habitación más económica! </b> cuenta con wifi y puedes guardar tus objetos personales en nuestros lockers individuales.",
    },
    {
        name: "Habitación privada",
        src: imgHabitacion2,
        servicios: [
            { name: "Televisión", icon: "ion:tv-outline" },
            { name: "x2", src: iconUser },
            { name: "A/C", src: iconAC },
            { name: "Baño privado", icon: "mingcute:shower-line" },
        ],
        descripcion:
            "¿Quieres mayor privacidad? ¡Podemos ayudarte! Contamos con <b>habitaciones privadas</b>. Esta habitación posee cama matrimonial.",
    },
    {
        name: "Habitación familiar",
        src: imgHabitacion3,
        servicios: [
            { name: "Televisión", icon: "ion:tv-outline" },
            { name: "x4", src: iconUser },
            { name: "A/C", src: iconAC },
            { name: "Baño privado", icon: "mingcute:shower-line" },
        ],
        descripcion:
            "¿Vienes con tu grupo de amigos o familia? Esta habitación es perfecta para tí. <b>Si son un grupo de 5 personas, avísanos</b> y acondicionamos la habitación.",
    },
];

export default habitaciones;
