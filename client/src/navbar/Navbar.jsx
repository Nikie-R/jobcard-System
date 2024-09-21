import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#435d7d", "#2D3748");
  const color = useColorModeValue("white", "white");

  return (
    <Box bg={bgColor} color={color} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={FaBars}
          aria-label="Open Menu"
          display={{ md: "none" }}
        />
        <Box fontWeight="bold" fontSize="xl">
          Jobcard System
        </Box>
        <Flex alignItems="center">
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <NavLink
              exact
              to="/"
              style={{ padding: "8px 16px", borderRadius: "md" }}
              activeStyle={{ backgroundColor: "#6c85a3" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/jobcards"
              style={{ padding: "8px 16px", borderRadius: "md" }}
              activeStyle={{ backgroundColor: "#6c85a3" }}
            >
              Jobcards
            </NavLink>
            <NavLink
              to="/customers"
              style={{ padding: "8px 16px", borderRadius: "md" }}
              activeStyle={{ backgroundColor: "#6c85a3" }}
            >
              Customers
            </NavLink>
            <NavLink
              to="/vehicles"
              style={{ padding: "8px 16px", borderRadius: "md" }}
              activeStyle={{ backgroundColor: "#6c85a3" }}
            >
              Vehicles
            </NavLink>
            <NavLink
              to="/quotations"
              style={{ padding: "8px 16px", borderRadius: "md" }}
              activeStyle={{ backgroundColor: "#6c85a3" }}
            >
              Quotations
            </NavLink>
            <NavLink
              to="/invoices"
              style={{ padding: "8px 16px", borderRadius: "md" }}
              activeStyle={{ backgroundColor: "#6c85a3" }}
            >
              Invoices
            </NavLink>
          </Flex>
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            ml={5}
            aria-label="Toggle Color Mode"
          >
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
