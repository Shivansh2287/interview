import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import adminLottie from "./admin.json";
import { motion } from "framer-motion";
import { pageVariants } from "../helper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import unauthorized from "./unauthorized.json";
const MotionBox = motion(Box);
export default function Admin() {
  const navigate = useNavigate();
  const [permission, setPermission] = React.useState(true);
  useEffect(() => {
    if (!localStorage.getItem("firebaseAuthToken")) return navigate("/login");

    auth.onAuthStateChanged((user) => {
      const uid = user.uid;
      const userData = collection(db, "users");
      getDocs(userData).then((response) => {
        const userData = response.docs.find((doc) => doc.id === uid);
        const user = userData.data();
        if (user.role !== "admin") {
          setPermission(false);
        }
      });
    });
  }, []);
  if (!permission)
    return (
      <Stack
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Lottie animationData={unauthorized} loop autoplay />
        <Heading size="4xl">Unauthorized</Heading>
      </Stack>
    );

  return (
    <>
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
        <Heading size="4xl" p={100}>
          Admin
        </Heading>
        <Lottie animationData={adminLottie} loop autoplay />;
      </MotionBox>
    </>
  );
}
