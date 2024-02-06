import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const basket = useSelector((state) => state.basket);
  console.log("from store", basket);
  const removeFromcart = (bask) => {
    dispatch({
      type: "removeFromCart",
      payload: bask,
    });
  };

  const seqence = (n) => {
    let temp = n;
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    console.log(result);

    return result;
  };

  const quanityUpdate = (event, basket) => {
    setQuantity(event.target.value);
    dispatch({
      type: "updateCart",
      payload: { ...basket, quantity: parseInt(event.target.value) },
    });
  };

  return (
    <div>
      <nav>
        <div>
          Basket Items: {basket.reduce((curr, acc) => curr + acc.quantity, 0)}
        </div>
      </nav>
      <hr></hr>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Selected Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {basket.map((bask) => {
              return (
                <tr key={bask.sku}>
                  <td>{bask.name}</td>
                  <td>
                    <select
                      name="choice"
                      value={bask.quantity}
                      onChange={(e) => quanityUpdate(e, bask)}
                    >
                      {seqence(bask.basketLimit)}
                    </select>
                  </td>
                  <td>£{bask.price}</td>
                  <td>£{bask.quantity * bask.price}</td>
                  <td>
                    <button onClick={() => removeFromcart(bask)}>
                      Remove All
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        Total Price: £
        {basket.reduce((curr, acc) => curr + acc.price * acc.quantity, 0)}
      </div>
      <div>
        <label>Input Your Card Number</label>
        <input type="text" />
      </div>
      <div>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
