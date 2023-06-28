"use client";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import {
  Avatar,
  Card,
  Paper,
  TextField,
  Typography,
  Collapse,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { THEME } from "../create-theme";
import Typed from "typed.js";
import { TransitionGroup } from "react-transition-group";

const BUSINESS_DOG =
  "https://mymodernmet.com/wp/wp-content/uploads/2018/01/bailey-dog-meme-2.jpg";

const NASR = "https://storage.googleapis.com/nasr-public/nasr-icon.png";

const WHAT_ARE_YOU_UP_TO = `
<p>Well ... I have been reading:</p>

<br/>

<ul>
  <li>Dostoevsky</li>
  <li>Mark Fisher</li>
  <li>H.P. Lovecraft</li>
</ul>
<br/>

<p>I've had <a href='https://www.youtube.com/watch?v=AKChFg7ku2A&ab_channel=NicoleMayumi'>
  See Tình on repeat all summer (that really addicting song from TikTok)
</a> and have gotten pretty good at the dance.</p>

<br/>
<ul>

<p>I'm also trying to get in shape and have been chasing the holy grail of squatting 315</p>


`;

export default function Home() {
  const [stage, setStage] = React.useState(0);
  const onComplete = () => setStage((prev) => prev + 1);

  return (
    <ThemeProvider theme={THEME}>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "primary.main",
          maxHeight: "100%",
          overflow: "auto",
          paddingY: 2,
          paddingX: 3,
        }}
      >
        <Box
          display="flex"
          height="100%"
          width="100%"
          maxHeight="100%"
          overflow="auto"
          gap={2}
          className={styles.container as string}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <TransitionGroup>
            <Collapse>
              <Bubble
                content="What is your name and where do you live?"
                onComplete={onComplete}
                avatarSrc={BUSINESS_DOG}
              />
            </Collapse>
            {stage >= 1 && (
              <Collapse>
                <Bubble
                  content="My name is Nasr and I live in NYC 🗽"
                  onComplete={onComplete}
                  avatarSrc={NASR}
                />
              </Collapse>
            )}

            {stage >= 2 && (
              <Collapse>
                <Bubble
                  content="What are you up to these days?"
                  onComplete={onComplete}
                  avatarSrc={BUSINESS_DOG}
                />
              </Collapse>
            )}
            {stage >= 3 && (
              <Collapse>
                <Bubble
                  content={WHAT_ARE_YOU_UP_TO}
                  onComplete={onComplete}
                  avatarSrc={NASR}
                />
              </Collapse>
            )}
            {stage >= 4 && (
              <Collapse>
                <Bubble
                  content={
                    "Wow you sound so smart and cool! How can I get in touch?"
                  }
                  onComplete={onComplete}
                  avatarSrc={BUSINESS_DOG}
                />
              </Collapse>
            )}

            {stage >= 5 && (
              <Collapse>
                <Bubble
                  content={"Email me at nasrmaswood@gmail.com"}
                  onComplete={onComplete}
                  avatarSrc={NASR}
                />
              </Collapse>
            )}
          </TransitionGroup>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

const Bubble: React.FC<{
  content: string;
  avatarSrc: string;
  onComplete: () => void;
}> = ({ content, avatarSrc, onComplete }) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "500px",
        minHeightt: "100px",
        alignItems: "center",
        alignContent: "center",
        gap: 3,
        padding: 2,
        marginTop: 1,
      }}
    >
      <Box>
        <Avatar variant="square" src={avatarSrc} />
      </Box>
      <TypingComponent content={content} onComplete={onComplete} />
    </Card>
  );
};

const TypingComponent: React.FC<{
  content: string;
  onComplete: () => void;
}> = ({ content, onComplete }) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [content],
      typeSpeed: 40,
      onComplete: (self: any) => {
        self.cursor.remove();
        setTimeout(onComplete, 500);
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <Typography fontSize={24} variant="body1" ref={el} />;
};
