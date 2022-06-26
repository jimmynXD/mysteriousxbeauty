import type { NextPage } from "next";
import Head from "next/head";
import { Row, Spacer, Image } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mysterious X Beauty</title>
        <meta
          name="description"
          content="Asian American NYC artist bringing awareness to Southeast Asian culture."
        />
      </Head>
      <Spacer y={2} />
      <Row>
        <Image
          objectFit="contain"
          autoResize
          width={"500px"}
          src="ttan-majestic.jpg"
        />
      </Row>
    </>
  );
};

export default Home;
