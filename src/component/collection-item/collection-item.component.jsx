import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.style.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  //dispatch is the para
  addItem: (item) => dispatch(addItem(item)), //mapDispatchToProps return an object. In this case, addItem is a property of this object
  // addItem is the key with value is async func we pass in, and then this item will be dispatched to the reducer ->  store in the format in actions
});

export default connect(null, mapDispatchToProps)(CollectionItem);
