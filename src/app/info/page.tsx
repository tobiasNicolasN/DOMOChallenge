import React from "react";
import style from './page.module.css'
import Link from "next/link";

function page() {
  return (
    <div className={style.page}>
      <main className={style.main}>
        <h1 className={style.title}>Desafío DOMO</h1>
        <p className={style.p}>Decidí desarrollar el desafío correspondiente a la imagen número 4, utilizando TypeScript y Next.js con un enfoque centrado en maximizar el rendimiento. Mi objetivo principal fue lograr una puntuación de 100 en todas las métricas de Lighthouse, lo cual fue exitoso gracias a las siguientes decisiones clave:</p>
        <ul className={style.ul}>
          <li className={style.item}>
            Next.js: Utilicé Next.js para demostrar mi adaptabilidad a las
            últimas tecnologías y aprovechar sus características de optimización
            de rendimiento.
          </li>
          <li className={style.item}>
            TypeScript: Elegí TypeScript para mantener un código más depurable y
            reducir errores durante el desarrollo.
          </li>
          <li className={style.item}>
            Manejo de formularios: Implementé el manejo de formularios con React
            Hook Form, lo cual permitió una validación eficiente y envío de
            datos al backend para almacenarlos en una base de datos MongoDB.
          </li>
          <li className={style.item}>
            Rutas dinámicas con Next.js Router: Añadí rutas dinámicas utilizando
            Next.js Router para proporcionar una navegación fluida y mejorar la
            experiencia del usuario.
          </li>
          <li className={style.item}>
            Animaciones minimalistas: Implementé animaciones suaves para los
            hover en los botones, manteniendo la estética minimalista de la web
            original.
          </li>
          <li className={style.item}>
            Optimización de imágenes: Convertí las imágenes a SVG y las optimicé
            para mejorar el rendimiento sin sacrificar la calidad visual.
          </li>
          <li className={style.item}>
            Distribución en componentes: El código está organizado en
            componentes reutilizables, lo que facilita su mantenimiento y
            futuras actualizaciones.
          </li>
          <li className={style.item}>
            Despliegue en Railway: Desplegué la aplicación en mi servicio de
            Railway, asegurando una entrega rápida y eficiente.
          </li>
        </ul>
        <p className={style.p}>Nota: No utilicé Booststrap en este proyecto. Sin embargo, estoy totalmente dispuesto a aprender esta técnologia en el menor tiempo posible para poder trabajar con ustedes.</p>
        <p className={style.p}>
        Me encantaría la oportunidad de una entrevista para poder discutir más sobre este proyecto y mis habilidades. ¡Estoy siempre abierto a seguir aprendiendo y mejorando!
        </p>
        <p className={style.p}>Mi portfolio: <Link href={"https://www.tobiasnicolasn.com/"} target="_blank">tobiasnicolasn.com</Link></p>
        <p className={style.p}>Correo: tobias.nicolas001@gmail.com</p>
        <Link href={"/"} className={style.button}>Volver a la web</Link>
      </main>
    </div>
  );
}

export default page;
