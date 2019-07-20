import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import { selectCartHidden } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import "./header.style.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  StyleHeaderContainer,
  StyleLogoContainer,
  StyleOptionsContainer,
  OptionLink
} from "./header.style";

const Header = ({ currentUser, hidden }) => (
  <StyleHeaderContainer>
    <StyleLogoContainer to="/">
      <Logo />
    </StyleLogoContainer>

    <StyleOptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </StyleOptionsContainer>
    {hidden ? null : <CartDropdown />}
  </StyleHeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
