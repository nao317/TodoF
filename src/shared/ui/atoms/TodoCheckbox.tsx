import React from "react";
import styles from "@/shared/ui/atoms/TodoCheckbox.module.css";

type props = {
    checked: boolean;
    onChange: () => void;
    ariaLabel?: string;
};

export default function TodoCheckbox({ checked, onChange, ariaLabel = "toggle todo" }: props) {
    return (
        <label className={styles.root}>
            <input
                className={styles.native}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                aria-label={ariaLabel}
            />
            <span className={styles.control} aria-hidden="true" />
        </label>
    );
}
