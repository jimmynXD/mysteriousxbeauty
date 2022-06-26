import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  createTheme,
  NextUIProvider,
  Row,
  Spacer,
  Container,
  Image,
  Link,
  styled,
} from "@nextui-org/react";
import { MXBFooter } from "../src/components/footer";
import { useRouter } from "next/router";
import clsx from "clsx";
import { MXBLink } from "../src/components";

const mxbTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "$black",
      link: "rgb(88, 88, 88)",
      linkHover: "rgba(27, 151, 205, 0.7)",
      linkActive: "rgba(27, 151, 205, 1)",
    },
    fonts: {
      sans: "Raleway",
      bant: "bantayog",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const MXBNavItem = styled(MXBLink, {
    position: "relative",
    fontWeight: "500",
    textTransform: "uppercase",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "$lg",
    fontFamily: "$bant",
    letterSpacing: "$wide",
    "&.active": {
      "&::after": {
        width: "100%",
      },
    },
    "&::after": {
      content: "",
      transition: "all 200ms cubic-bezier(.14,.79,.71,.36)",
      position: "absolute",
      background: "$black",
      height: "2px",
      bottom: 0,
      borderRadius: "2px",
      width: 0,
    },
    "&:hover": {
      "&::after": {
        background: "$linkHover",
        width: "160%",
      },
    },
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Asian American NYC artist bringing awareness to Southeast Asian culture."
        />
      </Head>
      <NextUIProvider theme={mxbTheme}>
        <Container
          justify="center"
          display="flex"
          direction="column"
          css={{
            minHeight: "100vh",
          }}
        >
          <Container css={{ flex: 1 }}>
            <Spacer y={3} />
            <Row justify="center">
              <Link href="/">
                <Image objectFit="contain" autoResize src="mxb-logo-4201.png" />
              </Link>
            </Row>
            <Spacer y={1} />
            <Row justify="center">
              <MXBNavItem
                href="about"
                className={clsx({ active: router.pathname === "/about" })}
              >
                about
              </MXBNavItem>
            </Row>
            <Component {...pageProps} />
          </Container>
          <Spacer y={1} />
          <MXBFooter />
          <Spacer y={1} />
        </Container>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
