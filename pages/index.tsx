import type { NextPage } from "next";
import Head from "next/head";
import {
  Row,
  Spacer,
  Card,
  Button,
  styled,
  Container,
} from "@nextui-org/react";
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
      <Container
        css={{
          backgroundColor: "transparent",
          "@xsMax": {
            "&::before": {
              content: "",
              position: "fixed",
              height: "100%",
              width: "100%",
              background: "url(ttan-majestic.jpg)",
              backgroundPosition: "center left",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              backgroundSize: "70vh",
            },
          },
        }}
      >
        <Row
          css={{
            "@xsMax": {
              display: "none",
            },
          }}
        >
          <Card.Image
            objectFit="contain"
            autoResize
            width={"500px"}
            src="ttan-majestic.jpg"
          />
        </Row>
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
