import { useDispatch, useSelector} from 'react-redux'

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    const newTotalQuantity = cart.totalQuanitity + 1;

    const updatedItems = cart.items.slice();
    const existingItem = updatedItems.find((item)=> item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem};
      updatedItem.quantity++;
      updatedItem.price = updatedItem.price + price;
      const exisitingItemIndex = updatedItems.findIndex(
        item => item.id === id
      );
    }
    // dispatch(
    //   cartActions.addItemToCart({
    //     id,
    //     title,
    //     price,
    //   })
    // );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
