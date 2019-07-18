export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitngCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (exisitngCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, careItemToTemove) => {
  const exisitngCartItem = cartItems.find(
    cartItem => cartItem.id === careItemToTemove.id
  );

  if (exisitngCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== careItemToTemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === careItemToTemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
