import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductData from "../../products_sample.json";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  console.log("bask ", basket);
  const addToCart = (product) => {
    console.log(basket);
    const find = basket.filter((data) => data.sku === product.sku);
    if (find.length > 0) {
      alert("Product already added");
    } else {
      dispatch({ type: "addToCart", payload: { ...product, quantity: 1 } });
    }
  };

  const removeFromcart = (product) => {
    console.log(basket);
    dispatch({
      type: "removeFromCart",
      payload: product,
    });
  };

  return (
    <div>
      <nav>
        <div>Basket Items: {basket.length}</div>
        <div>
          Total Price: £
          {basket.reduce((curr, acc) => curr + acc.price * acc.quantity, 0)}
        </div>
      </nav>
      <hr></hr>
      <div>
        {ProductData.map((product) => {
          return (
            <div key={product.sku}>
              <div>{product.name}</div>
              <div>{product.description}</div>
              <div>£{product.price}</div>
              <button onClick={() => addToCart(product)}>Add to Basket</button>
              <button onClick={() => removeFromcart(product)}>
                Remove from Basket
              </button>
            </div>
          );
        })}
      </div>
      <hr></hr>
      <button onClick={() => navigate("checkout")}>Proceed to Checkout</button>
    </div>
  );
};

export default ProductList;
