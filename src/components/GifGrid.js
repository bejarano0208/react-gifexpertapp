import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridGifItem } from './GridGifItem';
// import { getGif } from './helpers/getGifs';

export const GifGrid =  ({category}) => {

    // const [images, setImages] = useState([])
    const {loading,data:images}=useFetchGifs(category);







    return (
        <>
            <h3>{category}</h3>
            {loading&&<p>Loading</p>}
            <div className="card-grid">
            {
                images.map( (img)=>
                    (
                            <GridGifItem
                                key={img.id}
                                {...img}
                            />
                    )
                )
            }
            </div>

        </>
    )
}
