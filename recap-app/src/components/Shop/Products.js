import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const items = [
    {title:'Book 1',
    price:6,
    id:"b1",
    description:'This is a first product - amazing!'},
    {title:'Book 2',
    price:8,
    id:"b2",
    description:'This is a first product - amazing!'},
    {title:'Book 3',
    price:5,
    id:"b3",
    description:'This is a first product - amazing!'}
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
    
        {items.map(item=><ProductItem item={item} key= {item.id}></ProductItem>)}
    
      </ul>
    </section>
  );
};

export default Products;
