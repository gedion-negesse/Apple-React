import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2030/iphones" /*"/iphon.json"*/)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(`Error:unable to fecth`));
  }, []);
  console.log(products);
  let flip = true;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">
                <b>Iphones</b>
              </h1>

              <div className="berefe-descritption">
                <h2>
                  <b>The best for the brightest.</b>
                </h2>
              </div>
            </div>
          </div>
          <br />

          {products?.map((product, i) => {
            let id = product.product_id;
            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1;
              flip = !flip;
            } else {
              flip = !flip;
            }
            return (
              <div
                key={i}
                className="row justify-content-center text-center product-holder "
              >
                <div
                  className={`col-sm-12 col-md-6 mt-5 pt-5 my-auto order-${order1} `}
                >
                  <div className="product-title">{product.product_name}</div>
                  <div className="products-brief fw-bold">
                    {product.Product_brief_description}
                  </div>
                  <div className="products-descrition">
                    {product.Product_description}
                  </div>
                  <div className="starting_price">{`starting at ${product.Starting_price}`}</div>
                  <div className="monthly-price">{product.Price_range}</div>

                  <div>
                    <ul>
                      <li>
                        <Link to={"/iphone/" + product.product_id}>
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2} `}>
                  <div className="Product_img">
                    <img src={product.Product_img} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Iphone;

//product.product_id
