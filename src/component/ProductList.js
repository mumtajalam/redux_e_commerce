import React, { useEffect } from "react";

const ProductList = () => {

    const fetchProductList = ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(response => {
            console.log(response);
        })
    }
    
    useEffect(()=>{
        fetchProductList(); 
    },[])

    return(
        <>
            <div className="row bg-success bg-opacity-10">
                <div className="col-12">
                    HomePage:- ProductList
                </div>
            </div>
            <div className="row bg-success bg-opacity-10">
                <div className="col-12">
                    {data && data.map((temp) => (
                        <div>{temp.price}-{temp.title}</div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ProductList;