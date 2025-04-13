import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";
function SingleProduct() {
  const [product, setProduct] = useState([]);

  const { productID } = useParams();
  console.log(useParams());
  console.log(productID);
  useEffect(() => {
    fetch("http://localhost:2030/iphones" /*"/iphon.json"*/)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let productList = data.products;

        console.log(productList);

        let singleProduct = productList.filter(
          (product) => product.product_id == productID
        );
        setProduct(singleProduct);
      })
      .catch(() => console.log("error:unable to fetch"));
  }, [productID]);
  console.log(product);

  if (product.length) {
    let order1 = 1;
    let order2 = 2;

    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            {product?.map((products) => {
              return (
                <div
                  key={products.product_id}
                  className="row justify-content-center text-center"
                >
                  <div className={`col-12  mt-5 pt-5`}>
                    <div className="product-title">{products.product_name}</div>
                    <div className="products-brief fw-bolder">
                      {products.Product_brief_description}
                    </div>
                    <div className="product-description">
                      {products.Product_description}
                    </div>

                    <div className="starting_price">{`starting at ${products.Starting_price}`}</div>
                    <div className="monthly-price">{products.Price_range}</div>
                  </div>
                  <div className={`col-sm-12 col-md-6`}>
                    <div className="Product_img">
                      <img src={products.Product_img} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default SingleProduct;

//https://www.apple.com/in/iphone-se/
