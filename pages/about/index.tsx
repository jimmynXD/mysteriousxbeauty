import useMediaQuery from "@mui/material/useMediaQuery";
import { Card, Grid, Spacer, styled, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import React, { FC } from "react";

import { DOCS_PATH, docsFilePaths } from "../../scripts/mdx";

export type DataProps = {
  title?: string;
  description?: string;
};

export type MoreProps = {
  content?: string;
  docsPath: string;
  data: DataProps;
};

export interface DocsProps {
  docs: MoreProps[];
}

export type MotionProps = {
  children: React.ReactElement<any, any>;
};

const ShiftAnimation: FC<MotionProps> = ({ children }) => {
  if (!useMediaQuery("(max-width:600px)")) {
    return children;
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.75,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default function AboutMe({ docs }: DocsProps) {
  // Pulling about.mdx data
  const dataSet = [...docs]
    .filter((u) => u.docsPath.includes("about"))
    .map((item) => {
      return {
        title: item.data.title,
        description: item.data.description,
        content: item.content,
      };
    });

  const aboutData = Object.assign({}, dataSet[0]);

  const AboutContent = styled(Text, {
    fontWeight: "$normal",
    letterSpacing: "$normal",
    lineHeight: "$md",
    "@xsMax": {
      textAlign: "left",
    },
  });

  return (
    <>
      <Head>
        <title>About | MysteriousXBeauty</title>
      </Head>
      <Spacer y={1} />
      <Grid.Container gap={1}>
        <Grid xs={12} sm={3} justify="center">
          <ShiftAnimation>
            <Card.Image
              objectFit="contain"
              autoResize
              width={"300px"}
              src="ttan-0622622.png"
            />
          </ShiftAnimation>
        </Grid>
        <Grid xs sm>
          <Card.Body
            css={{
              "@smMax": {
                textAlign: "center",
              },
            }}
          >
            <Text
              h3
              css={{
                textTransform: "uppercase",
                letterSpacing: "$normal",
                fontFamily: "$bant",
                fontWeight: "500",
              }}
            >
              {aboutData.title}
            </Text>
            <AboutContent>{aboutData.description}</AboutContent>
            {aboutData.content && aboutData.content.length > 0 && (
              <>
                <Spacer y={1} />
                <AboutContent>{aboutData.content}</AboutContent>
              </>
            )}
          </Card.Body>
        </Grid>
      </Grid.Container>
    </>
  );
}

export function getStaticProps() {
  const docs = docsFilePaths.map((docsPath) => {
    const source = fs.readFileSync(path.join(DOCS_PATH, docsPath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      docsPath,
    };
  });

  return { props: { docs } };
}
