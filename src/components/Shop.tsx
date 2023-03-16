import React, { ReactNode } from 'react';
import Articulo from './Articulo';
import ArticuloModel from './../models/Articulo.model'

//Styles
import styles from '../styles/Shop.module.scss'

type ShopProps = {
  articulos: ArticuloModel[]
}

const Shop = ( {articulos}: ShopProps ) => {

  return (
    <header>
        <div className = {styles['container']}>
            <div className = {styles['shop']}>
              {articulos.map((articulo: ArticuloModel, index: number) => (
                <Articulo key={index} articulo = {articulo} />
              ))}
            </div>
        </div>
    </header>
  );
};

export default Shop