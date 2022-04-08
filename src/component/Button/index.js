import * as s from "./style";
import { useState } from "react";
import PropTypes from "prop-types";

const MessageButton = ({ children, onclick }) => (
  <s.MessageButton onClick={onclick}>{children}</s.MessageButton>
);

const FollowButton = () => {
  const [Follow, setFollow] = useState(false);

  const toogleFollow = () => {
    setFollow(!Follow);
  };

  return (
    <s.FollowButton follow={Follow} onClick={toogleFollow}>
      {Follow ? "Following" : "Follow"}
    </s.FollowButton>
  );
};

const Button = ({ children, icon, onClick, selected }) => (
  <s.StyledButton onClick={onClick} selected={selected}>
    {icon}
    {children}
  </s.StyledButton>
);

Button.defaultProps = {
  icon: null,
  selected: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  selected: PropTypes.bool,
};


export { Button, MessageButton, FollowButton };
