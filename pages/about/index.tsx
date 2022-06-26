import type { NextPage } from "next";
import React, { FC } from "react";
import Head from "next/head";
import { Spacer, Grid, Text, Card } from "@nextui-org/react";
import { postFilePaths, POSTS_PATH } from "../../scripts/mdx";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface PP {
  posts: any[];
}

export default function AboutMe({ posts }: PP) {
  console.log(posts);

  return (
    <>
      <Head>
        <title>About | Mysterious X Beauty</title>
        <meta
          name="description"
          content="Asian American NYC artist bringing awareness to Southeast Asian culture."
        />
      </Head>
      <Spacer y={2} />
      <Grid.Container gap={1}>
        <Grid xs={12} sm={3}>
          <Card.Image
            objectFit="contain"
            autoResize
            width={"300px"}
            src="ttan-0622622.png"
          />
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
              {posts[0].data.title}
            </Text>
            <Text
              css={{
                fontWeight: "$normal",
                letterSpacing: "$normal",
                lineHeight: "$md",
              }}
            >
              {posts[0].data.description}
            </Text>
            {posts[0].content.length > 0 && (
              <>
                <Spacer y={1} />
                <Text
                  css={{
                    fontWeight: "$normal",
                    letterSpacing: "$normal",
                    lineHeight: "$md",
                  }}
                >
                  {posts[0].content}
                </Text>
              </>
            )}
          </Card.Body>
        </Grid>
      </Grid.Container>
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
