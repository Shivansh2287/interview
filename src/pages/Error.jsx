import { Box } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import errorLottie from "./error.json";
import { motion } from "framer-motion";
import { pageVariants } from "../helper";
const MotionBox = motion(Box);
export default function Error() {
  return (
    <MotionBox
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Lottie animationData={errorLottie} loop autoplay />;
    </MotionBox>
  );
}
