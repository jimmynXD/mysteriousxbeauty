import { Spacer, Row, Image } from "@nextui-org/react";

export const AboutImage = () => {
  return (
    <>
      <Spacer y={2} />
      <Row>
        <Image
          objectFit="contain"
          autoResize
          width={"300px"}
          src="ttan-081021-1.png"
        />
      </Row>
    </>
  );
};
