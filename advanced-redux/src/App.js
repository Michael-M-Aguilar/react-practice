import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {uiActions} from './store/ui-slice'

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data.'
      }));

      const response = await fetch (
        'https://react-http-342f9-default-rtdb.firebaseio.com/.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data Failed!",
          })
        );
      }

       dispatch(
         uiActions.showNotification({
           status: "Success",
           title: "Success",
           message: "Sent Cart Data Succesfully.",
         })
       );
    };
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
