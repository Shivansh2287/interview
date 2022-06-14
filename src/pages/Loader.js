import { Stack } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import loaderLottie from "./loader.json";
export default function Loader() {
  return (
    <Stack
      sx={{
        height: "100vh",
      }}
    >
      <Lottie animationData={loaderLottie} loop autoplay />
    </Stack>
  );
}
