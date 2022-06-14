import { Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import home from "./home.json";
import Lottie from "lottie-react";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Stack direction="column" spacing={0} height="100vh" width="100vw">
      <Stack
        direction="row"
        spacing={1}
        px={5}
        py={5}
        justifyContent="space-between"
      >
        <Heading>Home Page </Heading>

        <Stack direction="row" spacing={3}>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => navigate("/admin")}
          >
            Admin
          </Button>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => navigate("/store1")}
          >
            Store1
          </Button>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => navigate("/store2")}
          >
            Store2
          </Button>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Stack>
      </Stack>
      <Stack
        height="100%"
        width="100%"
        justifyContent="center"
        alignContent="center"
      >
        <Lottie
          animationData={home}
          loop
          autoplay
          style={{
            width: "50%",
            alignSelf: "center",
          }}
        />
      </Stack>
    </Stack>
  );
}
