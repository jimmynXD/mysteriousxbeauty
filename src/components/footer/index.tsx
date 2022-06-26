import { Row, Spacer, Text, styled } from "@nextui-org/react";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faBehance,
  faLinkedinIn,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faCopyright } from "@fortawesome/free-regular-svg-icons";
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
      icon: faEnvelope,
      href: "mailto:contact@mysteriousxbeauty.com",
    },
  ];
  return (
    <>
      <Row justify="center">
        <Text
          small
          css={{ textTransform: "uppercase", letterSpacing: "$wider" }}
        >
          Follow
        </Text>
      </Row>
      <Spacer y={1} />
      <Row justify="center">
        {SOCIAL_DATA.map((social, index) => (
          <LogoLink href={social.href} key={index} target="_blank">
            <Fa icon={social.icon} />
          </LogoLink>
        ))}
      </Row>
      <Row justify="center" css={{ paddingTop: "1rem" }}>
        <Text
          small
          css={{ textTransform: "uppercase", letterSpacing: "$wider" }}
        >
          All Designs Copyright <Fa icon={faCopyright} /> mysteriousxbeauty
        </Text>
      </Row>
      <Spacer y={1} />
    </>
  );
};
