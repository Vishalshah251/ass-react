import { useEffect, useState } from "react";

function Fetch() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((incomingData) => {
                setProduct(incomingData);
                console.log(incomingData);
            })
            .catch((err) => {
                console.error("error fetching product ", err);
            });
    }, []);

    return (
        <div>
            {product.length > 0 ? (
                <ul>
                    {product.map((item) => (
                        <li key={item.id} className="products">
                            <h2>{item.title}</h2>
                            <img width="100" src={item.image} />
                            <p>{item.description}</p>
                            <p>Price: {item.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
}

export default Fetch;
