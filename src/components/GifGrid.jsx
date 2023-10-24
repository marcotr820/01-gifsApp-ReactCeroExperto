
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

   const { images, isLoading } = useFetchGifs(category);

   return (
      <>
         <h3>{ category }</h3>
         {
            isLoading && (<h3 >cargando...</h3>)
         }
         
         {/* trabajando en js para agregar clases se usa className */}
         <div className="card-grid">
            {
               images.map( (image) => (
                  <GifItem
                     key={ image.id }
                     { ...image }   //exparsiendo los datos de image podemos desestructurar cualquier dato en el componente hijo
                  />
               ))
            }
         </div>
      </>
   )
}
