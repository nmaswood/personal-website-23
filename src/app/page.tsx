"use client";
import { Gaegu } from "@next/font/google";
import { IBM_Plex_Sans } from "@next/font/google";
import styles from "./page.module.css";
import Box from "@mui/material/Box";

const biryani = Gaegu({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{
        width: "100%",
        height: "100%",
        background: "beige",
      }}
    >
      <Box
        display="grid"
        height="100%"
        width="100%"
        gridTemplateColumns="auto 1fr"
        gridTemplateRows="1fr"
        gap={3}
      >
        <Box
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <video
            loop
            style={{ width: "fit-content", height: "100vh" }}
            autoPlay
            muted
          >
            <source src="/cat-splice.mp4" />
          </video>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            display="flex"
            height="100%"
            width="fit-content"
            flexDirection="column"
            justifyContent="center"
          >
            <Box width="fit-content" padding={1} marginBottom={1}>
              <p
                className={biryani.className}
                style={{
                  color: "black",
                  fontSize: "64px",
                }}
              >
                My name is Nasr and I live in NYC
              </p>
            </Box>
            <Box width="fit-content" padding={1} marginBottom={1}>
              <p
                className={biryani.className}
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                I enjoy:
              </p>
            </Box>
            <Box
              width="fit-content"
              padding={1}
              marginBottom={1}
              display="flex"
              gap={2}
            >
              🇧🇩
              <p
                className={biryani.className}
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                learning languages
              </p>
            </Box>
            <Box
              width="fit-content"
              padding={1}
              marginBottom={1}
              display="flex"
              gap={2}
            >
              🗽
              <p
                className={biryani.className}
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                walking around the city
              </p>
            </Box>
            <Box
              width="fit-content"
              padding={1}
              marginBottom={1}
              display="flex"
              gap={2}
            >
              😺
              <p
                className={biryani.className}
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                hanging out with cats
              </p>
            </Box>
            <Box
              width="fit-content"
              padding={1}
              marginTop={3}
              display="flex"
              gap={2}
            >
              ✉️
              <p
                className={biryani.className}
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                Get in touch at nasrmaswood@gmail.com
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
