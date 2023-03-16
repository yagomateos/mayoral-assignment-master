// Importamos los módulos y componentes necesarios desde sus respectivas bibliotecas.
import React, { ReactNode } from 'react';
import ArticuloModel from './../models/Articulo.model'
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

// Importamos los estilos para el componente.
import styles from '../styles/Articulo.module.scss'

// Definimos el tipo de datos para las propiedades que recibirá el componente.
type ArticuloProps = {
    articulo: ArticuloModel
}

// Creamos el componente Articulo que recibirá las propiedades definidas previamente.
const Articulo = ({ articulo }: ArticuloProps) => {
  // Devolvemos el HTML que conformará el componente.
  return (
    <article>
        {/* Creamos un componente Card de Bootstrap con la clase card definida en los estilos. */}
        <Card className={styles['card']}>
            {/* Añadimos la imagen del artículo en la parte superior de la card. */}
            <Card.Img className={styles['card-img-top']} variant="top" src = {articulo.image} alt ={'imagen articulo ${articulo.name}'} />
            {/* Añadimos el cuerpo de la card. */}
            <Card.Body className={styles['card-body']}>
                {/* Añadimos el título del artículo. */}
                <Card.Title>{articulo.name}</Card.Title>
                {/* Si el artículo tiene un precio anterior, lo mostramos como tachado. */}
                {articulo.oldPrice >0 && <Card.Text className={styles['old-price']}>{articulo.oldPrice} €</Card.Text>}
                {/* Si el artículo tiene un precio anterior, mostramos el nuevo precio y su descuento. Si no, mostramos el precio normal. */}
                {articulo.oldPrice >0 ? (
                    <Card.Text className={styles['new-price']}>{articulo.price} € <span>(-{Math.floor(((articulo.oldPrice - articulo.price) / articulo.oldPrice) * 100)}%)</span></Card.Text>
                ) : (
                    <Card.Text>{articulo.price} €</Card.Text>
                )}
                {/* Si el artículo tiene más de un color, indicamos que hay más colores disponibles. */}
                {articulo.colores >1 && <Card.Text className={styles['more-colors']}>más colores</Card.Text>}
                {/* Añadimos un botón de añadir al carrito con la clase btn definida en los estilos. */}
                <Button className={styles['btn']} variant="primary">AÑADIR</Button>
            </Card.Body>
        </Card>
    </article>
  );
};

// Exportamos el componente para que pueda ser utilizado en otros archivos.
export default Articulo
