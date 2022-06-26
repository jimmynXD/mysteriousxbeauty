import { Link, styled } from "@nextui-org/react";

export const MXBLink = styled(Link, {
  transition: "all 200ms ease-in-out",
  "&.active": {
    color: "$linkActive",
    "&::after": {
      background: "$linkActive",
    },
  },
  "&:hover": {
    opacity: 1,
    color: "$linkHover",
  },
});
