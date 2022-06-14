import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (data) => {
        toast({
          title: "Success",
          description: "You are logged in",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        var uid = data.user.uid;
        localStorage.setItem("user", JSON.stringify(data._tokenResponse.email));
        localStorage.setItem("userId", JSON.stringify(data._tokenResponse.uid));
        localStorage.setItem(
          "firebaseAuthToken",
          data._tokenResponse.refreshToken
        );
        const userData = collection(db, "users");
        getDocs(userData).then((response) => {
          const userData = response.docs.find((doc) => doc.id === uid);
          const user = userData.data();
          if (user.role === "admin") {
            navigate("/admin");
          }
          if (user.role === "store1") {
            navigate("/store1");
          }
          if (user.role === "store2") {
            navigate("/store2");
          }
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Invalid credientials",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <Stack spacing={4} p="1rem">
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input
                  type="email"
                  placeholder="email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link>forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
}
