import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ cartItems }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItems.img.singleImage} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeFromCart(cartItems.id)}
        ></i>
      </td>
      <td>{cartItems.name}</td>
      <td>${cartItems.price.newPrice.toFixed(2)}</td>
      <td className="product-quantity">{cartItems.quantity}</td>
      <td className="product-subtotal">
        ${(cartItems.price.newPrice * cartItems.quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItems: PropTypes.object,
};
