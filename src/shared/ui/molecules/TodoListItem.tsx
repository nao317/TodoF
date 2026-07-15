import React from "react";
import { Badge, TodoCheckbox } from "@/shared/ui/atoms";
import styles from "@/shared/ui/molecules/TodoListItem.module.css";

export type TodoListItemViewModel = {
  id: number | string;
  title: string;
  checked: boolean;
  onToggle: () => void;
  ariaLabel?: string;
  tagLabel?: string | null;
  description?: string | null;
  meta?: string | null;
};

type Props = TodoListItemViewModel;

export default function TodoListItem({
  title,
  checked,
  onToggle,
  ariaLabel = "toggle item",
  tagLabel,
  description,
  meta,
}: Props) {
  return (
    <article className={styles.root}>
      <TodoCheckbox checked={checked} onChange={onToggle} ariaLabel={ariaLabel} />

      <div className={styles.content}>
        <div className={styles.titleRow}>
          <span className={checked ? styles.doneTitle : styles.title}>{title}</span>
          {tagLabel ? <Badge tone="accent">{tagLabel}</Badge> : null}
        </div>

        {description ? <p className={styles.description}>{description}</p> : null}
        {meta ? <p className={styles.meta}>{meta}</p> : null}
      </div>
    </article>
  );
}
