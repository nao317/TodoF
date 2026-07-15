import React from "react";
import styles from "@/shared/ui/atoms/Badge.module.css";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "accent";
};

export default function Badge({ tone = "neutral", className = "", children, ...rest }: Props) {
  const cls = [styles.badge, tone === "accent" ? styles.accent : styles.neutral, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}
