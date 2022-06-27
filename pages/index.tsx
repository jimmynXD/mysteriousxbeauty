import {
  Button,
  Card,
  Container,
  Row,
  Spacer,
  styled,
} from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const FirstRow = styled(Row, {
    paddingTop: "2rem",
    "@xs": {
      display: "none",
    },
  });

  const ButtonRow = styled(Row, {
    "@xsMax": {
      zIndex: 1,
    },
    "@xs": {
      display: "none",
    },
  });

  return (
    <>
      <Head>
        <title>Mysterious X Beauty</title>
        <meta
          name="description"
          content="Asian American NYC artist bringing awareness to Southeast Asian culture."
        />
      </Head>
      <Container css={{ position: "relative" }}>
        <Card.Body
          css={{
            "@xsMax": {
              position: "fixed",
              top: "10%",
              left: "5%",
              width: "150%",
            },
          }}
        >
          <Card.Image
            objectFit="contain"
            autoResize
            src="ttan-majestic.jpg"
            css={{
              clip: " rect(0px,60px,200px,0px)",
              "@xs": {
                maxWidth: "500px",
              },
            }}
          />
        </Card.Body>
        <FirstRow justify="center">
          <Button
            ripple
            size={"xl"}
            onPress={() => router.push("/about")}
            css={{
              borderRadius: "0",
              backgroundColor: "rgba(0,0,0,0.7)",
              border: "1px solid $gray800",
              textTransform: "uppercase",
              letterSpacing: "$widest",
            }}
          >
            About
          </Button>
        </FirstRow>
        {MOBILE_DATA.map((item, index) => (
          <>
            <Spacer y={1} />
            <ButtonRow justify="center">
              <Button
                key={index}
                ripple
                size={"xl"}
                onPress={() => window.open(item.href, "_blank")}
                css={{
                  borderRadius: "0",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  border: "1px solid $gray800",
                  textTransform: "uppercase",
                  letterSpacing: "$widest",
                }}
              >
                {item.label}
              </Button>
            </ButtonRow>
          </>
        ))}
      </Container>
    </>
  );
};

export default Home;

const MOBILE_DATA = [
  {
    label: "Portfolio",
    href: "https://mysteriousxbeauty.tumblr.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mysteriousxbeauty/",
  },
  {
    label: "Open Sea",
    href: "https://opensea.io/mysteriousxbeauty",
  },
  {
    label: "Email",
    href: "mailto:contact@mysteriousxbeauty.com",
  },
];
