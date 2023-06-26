"use client";
import { IBM_Plex_Sans, Codystar } from "@next/font/google";
import styles from "./page.module.css";
import Box from "@mui/material/Box";

const TITLE = Codystar({
  subsets: ["latin"],
  weight: "400",
  display: "block",
});
const BODY = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "block",
});

export default function Home() {
  const Text = () => (
    <Box display="flex" width="100%">
      <Box
        width="min-content"
        marginBottom={1}
        paddingLeft={8}
        paddingTop={"300px"}
      >
        <p
          className={TITLE.className}
          style={{
            color: "white",
            fontSize: "84px",
          }}
        >
          Nasr Maswood
        </p>
      </Box>
      <Box>
        <Box
          display="flex"
          padding={1}
          marginBottom={1}
          height="100%"
          alignItems="center"
        >
          <p
            className={BODY.className}
            style={{
              color: "black",
              fontSize: "2rem",
            }}
          >
            I enjoy:
          </p>
        </Box>

        <LineItem emoji="🇧🇩" content="learning languages" />
        <LineItem emoji="🗽" content="walking around the city" />
        <LineItem emoji="😺" content="hanging out with cats" />
        <Box
          width="min-content"
          padding={1}
          marginTop={3}
          display="flex"
          gap={2}
        >
          ✉️
          <p
            className={BODY.className}
            style={{
              color: "black",
              fontSize: "2rem",
            }}
          >
            Get in touch at nasrmaswood@gmail.com
          </p>
        </Box>
      </Box>
    </Box>
  );
  return (
    <Box width="100%" height="100%" bgcolor="orange">
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
      <Box fontSize="2rem">{emoji}</Box>
      <p
        className={BODY.className}
        style={{
          color: "black",
          fontSize: "2rem",
        }}
      >
        {content}
      </p>
    </Box>
  );
};
