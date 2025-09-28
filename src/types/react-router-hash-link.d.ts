declare module "react-router-hash-link" {
  import * as React from "react";
  import { NavLinkProps } from "react-router-dom";

  export interface HashLinkProps extends NavLinkProps {
    smooth?: boolean;
    scroll?: (el: HTMLElement) => void;
  }

  export const HashLink: React.ForwardRefExoticComponent<
    HashLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;

  export const NavHashLink: typeof HashLink;
}
