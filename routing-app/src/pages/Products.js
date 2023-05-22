import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

export default function Products() {
  const productDetail = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
  ];
  return (
    <Fragment>
      <h1>PRODUCTS PAGE</h1>
      <div className={classes.container}>
        <ul className={classes.productsList}>
          {productDetail.map((prod) => {
            return (
              <li className={classes.product}>
                <Link to={prod.id}>
                  <h2>{prod.title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Link to=".." relative="path">
        Back
      </Link>
    </Fragment>
  );
}
