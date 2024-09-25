import { useState } from "react";


function ProductList () {
    
    const products = [
        {id: 1, title: "sofa", price: 999},
        {id: 2, title: "table", price: 500},
        {id: 3, title: "armChair", price: 300}
    ];
    const [productsList, setProductsList] = useState(products);
    function onCLickEventHandler () {
        setProductsList(list => list.concat({id:78, title: "book", price: 15}));
    }

    return (
        <section>
            <button onClick={onCLickEventHandler}>
                Add Product
            </button>
            <ul>
                {productsList.map(product => <li>{product.title} ({product.price})</li>)}
            </ul>
        </section>
    )
}

export default ProductList;