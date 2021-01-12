import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp=()=>{

    //const categories=["One Punch","Samurai X","Dragon ball"]
    const [categories, setCategories] = useState(["One Punch"]);


    // const handleAdd=()=>{
    //     setcategories(["Naruto",...categories])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map( (element,idx) =>(
                        <GifGrid
                            key={element}
                            category={element}
                        />
                    ))

                }
            </ol>
        </>
    );

}

export default GifExpertApp;