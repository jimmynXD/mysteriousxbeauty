import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mysterious X Beauty</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="mxb--galaxy">
        <div className="mxb--world">
          <div className="mxb--logo-wrapper">
            <img className="mxb--logo" src="mxb-logo-4201.png" />
          </div>
          <div className="mxb--landing-img-wrapper">
            <img className="mxb--landing-img" src="ttan-majestic.jpg" />
          </div>
        </div>
        <div>footer</div>
      </main>
    </>
  );
};

export default Home;