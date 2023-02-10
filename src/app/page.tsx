"use client";
import { Gaegu } from "@next/font/google";
import styles from "./page.module.css";
import Box from "@mui/material/Box";

const biryani = Gaegu({
  subsets: ["latin"],
  weight: "400",
  display: "block",
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
        <Box width="100%" height="100%" display="flex" justifyContent="center">
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

            <LineItem emoji="🇧🇩" content="learning languages" />
            <LineItem emoji="🗽" content="walking around the city" />
            <LineItem emoji="😺" content="hanging out with cats" />
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

const LineItem: React.FC<{ emoji: string; content: string }> = ({
  emoji,
  content,
}) => {
  return (
    <Box
      width="fit-content"
      padding={1}
      marginBottom={1}
      display="flex"
      gap={2}
    >
      {emoji}
      <p
        className={biryani.className}
        style={{
          color: "black",
          fontSize: "1.5rem",
        }}
      >
        {content}
      </p>
    </Box>
  );
};
