import React from "react";
import { useColorMode, Button, useColorModeValue, Box } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <BsMoon /> : <BsSun />}
      </Button>
    </>
  );
}
