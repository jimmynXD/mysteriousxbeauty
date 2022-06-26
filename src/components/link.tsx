import { Link, styled } from "@nextui-org/react";

export const MXBLink = styled(Link, {
  "&.active": {
    color: "$linkActive",
    "&::after": {
      background: "$linkActive",
    },
  },
  "&:hover": {
    opacity: 1,
    color: "$linkHover",
    "&::after": {
      background: "$linkHover",
    },
  },
});
