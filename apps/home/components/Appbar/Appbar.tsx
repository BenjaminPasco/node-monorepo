"use client";

import * as stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";
import { AppbarButton } from "../Buttons";

const styles = stylex.create({
  base: {
    padding: "2rem",
    display: "inline-flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
});

export default function Appbar() {
  const router = useRouter();

  return (
    <div {...stylex.props(styles.base)}>
      <AppbarButton onClick={() => router.push("/me")}>Personnal</AppbarButton>
      <AppbarButton onClick={() => router.push("/projects")}>
        Projects
      </AppbarButton>
      <AppbarButton onClick={() => router.push("/notes")}>Notes</AppbarButton>
      <AppbarButton onClick={() => router.push("/articles")}>
        Articles
      </AppbarButton>
    </div>
  );
}
