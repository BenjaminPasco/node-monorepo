"use client";

import { MouseEvent, PropsWithChildren } from "react";
import { colors } from "../../theme/colors.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    boxShadow: "unset",
    border: "0px",
    color: {
      default: colors.grey6,
      ":hover": colors.grey1,
    },
    backgroundColor: {
      default: "unset",
      ":hover": colors.accent9,
      ":active": colors.accent11,
    },
    padding: "0.5rem 1rem",
    borderRadius: "2rem",
    fontSize: "1.5rem",
    fontWeight: "300",
  },
});

export type AppbarButtonProps = PropsWithChildren<{
  onClick: React.EventHandler<MouseEvent>;
}>;

export default function AppbarButton(props: AppbarButtonProps) {
  return (
    <button {...stylex.props(styles.base)} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
