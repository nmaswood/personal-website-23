"use client";
import { Gaegu } from "@next/font/google";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const GAEGU = Gaegu({
  subsets: ["latin"],
  weight: "400",
  display: "block",
});

export default function Home() {
  const Text = () => (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex={1}
      paddingX={2}
    >
      <Box
        display="flex"
        height="100%"
        width="fit-content"
        flexDirection="column"
        justifyContent="center"
      >
        <Box width="fit-content" padding={1} marginBottom={1}>
          <p
            className={GAEGU.className}
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
            className={GAEGU.className}
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
            className={GAEGU.className}
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
  );
  return (
    <Box width="100%" height="100%" bgcolor="beige">
      <Box
        display="flex"
        height="100%"
        width="100%"
        gap={3}
        className={styles.container as string}
      >
        <Text />
      </Box>
    </Box>
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
        className={GAEGU.className}
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
