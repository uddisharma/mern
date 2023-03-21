import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  // Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { setAdminLogin } from "../../store/AdminLoginSlice";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { GiIceCreamScoop } from "react-icons/gi";
import { FaTablets } from "react-icons/fa";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { useDispatch } from "react-redux";

const LinkItems = [
  { name: "Home", icon: FiHome, link: "/admin/dashboard" },
  { name: "Products", icon: FiHome, link: "/admin/product-list" },
  { name: "Users", icon: FiHome, link: "/admin/user-list" },
  { name: "ContactUs", icon: FiHome, link: "/admin/contactus/details" },
  { name: "Orders", icon: FiHome, link: "/admin/order-list" },
  { name: "Add Product", icon: FiHome, link: "/admin/add-product" },
  {
    name: "Remove Product",
    icon: FiHome,
    link: "/admin/remove-product",
  },
  { name: "Update Product", icon: FiHome, link: "/admin/update-product" },
];

export default function Sidebar({ children }) {
  const dispatch = useDispatch;
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(setAdminLogin(false));
    toast({
      title: "Logout Successful.",
      description: "Bye Bye Admin!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(setAdminLogin(false));
    toast({
      title: "Logout Successful.",
      description: "Bye Bye Admin!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      {LinkItems.map((e) => (
        <Link to={e.link}>
          <NavItem key={e.name} icon={e.icon}>
            {e.name}
          </NavItem>
        </Link>
      ))}
      <a href="/">
        <NavItem onClick={logout} icon="FiHome">
          Logout
        </NavItem>
      </a>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "cyan.400",
        color: "white",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
