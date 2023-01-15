import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CustButton = ({
  text,
  color,
  to = "",
  onClick,
  w,
  v,
  textColor,
  pad,
}) => {
  return (
    <>
      {to.length !== 0 ? (
        <Link to={to}>
          <Button
            width={w}
            variant={v}
            onClick={onClick}
            colorScheme={color}
            color={textColor}
            padding={pad}
          >
            {text}
          </Button>
        </Link>
      ) : (
        <Button
          width={w}
          variant={v}
          onClick={onClick}
          colorScheme={color}
          color={textColor}
        >
          {text}
        </Button>
      )}
    </>
  );
};

export default CustButton;
