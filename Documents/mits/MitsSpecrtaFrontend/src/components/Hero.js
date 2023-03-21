import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
const features = [
  {
    name: "Brand-Building-Management",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: " Product Specification Packaging & Registration",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Research & Development",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Third Party Manufacturing",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
  {
    name: "Business-Strategy-Consumer-Insights",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Market Research & Market Analysis",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Regulatory , Sales & Marketing & Business Intelligence",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Pharma-Franchise-Providers",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];
export default function Hero() {
  return (
    <div className="w-[100%] m-auto bg-white">
      <div className="w-[90%] m-auto">
        <Stack
          className="bg-white"
          minH={"80vh"}
          margin="auto"
          direction={{ base: "column", md: "row" }}
        >
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.400",
                    zIndex: -1,
                  }}
                >
                  DERMATOLOGY
                </Text>
                <br />{" "}
                <Text color={"blue.400"} as={"span"}>
                  Franchise Company
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Dermatology is the name of the medical specialty that deals with
                skin, hair & nails. It is a specialization with components of
                both surgery and medicine. A dermatologist is a doctor who
                specializes in disorders of the skin, hair, and nails
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Link to="/products">
                  <Button
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Explore products
                  </Button>
                </Link>
                <Link to="/contact  ">
                  <Button rounded={"full"}>Contact Us</Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Login Image"}
              objectFit={"contain"}
              src={"https://specderm.in/wp-content/uploads/2023/01/img-2.png"}
            />
          </Flex>
        </Stack>
        <div
          style={{ display: "flex " }}
          className="flex-1 flex-row justify-around"
        >
          <div>
            <Image
              className="w-[100px] h-[100px]"
              alt={"Login Image"}
              // objectFit={'contain'}
              src={
                "https://specderm.in/wp-content/uploads/2022/12/Anti-Dandruff-100x100.png"
              }
            />
            <h3 className="text-center text-xl text-gray-400 text-semibold pt-2">
              Anti-Dandruff
            </h3>
          </div>
          <div>
            <Image
              className="w-[100px] h-[100px]"
              alt={"Login Image"}
              // objectFit={'contain'}
              src={
                "https://specderm.in/wp-content/uploads/2022/12/Anti-Psoriatic-100x100.png"
              }
            />
            <h3 className="text-center text-xl text-gray-400 text-semibold pt-2">
              Anti-Psoriatic
            </h3>
          </div>
          <div>
            <Image
              className="w-[100px] h-[100px]"
              alt={"Login Image"}
              // objectFit={'contain'}
              src={
                "https://specderm.in/wp-content/uploads/2022/12/Anti-Acne-100x100.png"
              }
            />
            <h3 className="text-center text-xl text-gray-400 text-semibold pt-2">
              Anti-Acne
            </h3>
          </div>
          <div>
            <Image
              className="w-[100px] h-[100px]"
              alt={"Login Image"}
              // objectFit={'contain'}
              src={
                "https://specderm.in/wp-content/uploads/2022/12/Anti-Vitiligo-100x100.png"
              }
            />
            <h3 className="text-center text-xl text-gray-400 text-semibold pt-2">
              Anti-Vitiligo
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
