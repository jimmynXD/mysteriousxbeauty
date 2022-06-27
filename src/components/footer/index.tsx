import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTumblr,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCopyright,
  faEnvelope,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { Row, Spacer, styled, Text } from "@nextui-org/react";

import { MXBLink } from "..";

export const MXBFooter = () => {
  const LogoLink = styled(MXBLink, {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  });

  const SOCIAL_DATA = [
    {
      icon: faInstagram,
      href: "https://www.instagram.com/mysteriousxbeauty/",
    },
    {
      icon: faFacebook,
      href: "https://www.facebook.com/mysteriousxbeauty",
    },
    {
      icon: faTumblr,
      href: "https://mysteriousxbeauty.tumblr.com/",
    },
    {
      icon: faTwitter,
      href: "https://twitter.com/mysteriousxb",
    },
    {
      icon: faBehance,
      href: "https://www.behance.net/user/?username=mysteriousxbeauty",
    },
    {
      icon: faLinkedinIn,
      href: "https://www.linkedin.com/in/mysteriousxbeauty/",
    },
    {
      icon: faSquare,
      href: "https://opensea.io/mysteriousxbeauty",
      custom: "far fa-hexagon-vertical-nft",
    },
    {
      icon: faEnvelope,
      href: "mailto:contact@mysteriousxbeauty.com",
    },
  ];
  return (
    <>
      <Row justify="center">
        <Text
          small
          css={{
            textTransform: "uppercase",
            letterSpacing: "$wider",
            "@xsMax": {
              display: "none",
            },
          }}
        >
          Follow
        </Text>
      </Row>
      <Spacer y={1} />
      <Row
        justify="center"
        css={{
          "@xsMax": {
            display: "none",
          },
        }}
      >
        {SOCIAL_DATA.map((social, index) => (
          <LogoLink href={social.href} key={index} target="_blank">
            {social.custom ? (
              <i className={social.custom}></i>
            ) : (
              <Fa icon={social.icon} />
            )}
          </LogoLink>
        ))}
      </Row>
      <Row justify="center" css={{ paddingTop: "1rem" }}>
        <Text
          small
          css={{
            textTransform: "uppercase",
            letterSpacing: "$wider",
            "@xsMax": {
              textAlign: "center",
            },
          }}
        >
          All Designs Copyright <Fa icon={faCopyright} /> mysteriousxbeauty
        </Text>
      </Row>
      <Spacer y={1} />
    </>
  );
};
