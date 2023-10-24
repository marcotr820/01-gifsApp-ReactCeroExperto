import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
   // un hook no es mas que una funcion que regresa algo normalmente un objeto

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(true)

   const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);   //cargamos las images
      setIsLoading(false);    //cambiamos estado de isloading una vez cargadas las imagenes
   }

   useEffect( () => {
      getImages();
   }, []) //si dejamos las dependencias vacias el hook solo se disparara la primera vez que se crea el componente

   return {
      images,
      isLoading,
   }
}
