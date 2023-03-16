import React, { ReactNode } from 'react'; //Importar librerías de React
import Navbar from 'react-bootstrap/Navbar' //Importar componente Navbar de React Bootstrap
import { useEffect, useState } from "react"; //Importar hooks useEffect y useState de React

// Importación del archivo de estilos correspondiente al Footer
import styles from "../styles/Footer.module.scss";

const Footer = () => { //Definir componente funcional Footer
  const [isMobile, setIsMobile] = useState(false); //Declarar estado inicial isMobile a falso

  useEffect(() => { //Definir efecto secundario para detectar cambios en el tamaño de la ventana
    const handleResize = () => { //Función para manejar los cambios de tamaño de ventana
      setIsMobile(window.innerWidth < 664); //Actualizar estado de isMobile si el ancho de la ventana es menor que 664
    };

    handleResize(); //Ejecutar la función handleResize la primera vez
    window.addEventListener("resize", handleResize); //Agregar un listener para detectar cambios en el tamaño de la ventana

    // Limpiar efectos secundarios
    return () => {
      window.removeEventListener("resize", handleResize); //Eliminar listener para detectar cambios en el tamaño de la ventana
    };
  }, []);

  return ( //Renderizar el componente
    <footer>
      <Navbar fixed="bottom" expand="lg" variant="light" bg="light"> 
        <h3 className="mx-auto">
          {isMobile ? "Movil" : "Escritorio"} 
        </h3>
      </Navbar>
    </footer>
  );
};

export default Footer //Exportar el componente Footer para ser usado en otros archivos de JavaScript/TypeScript.
