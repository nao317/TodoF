// ButtonのUIコンポーネント
import React from 'react';
import styles from '@/shared/ui/atoms/Button.module.css';
type props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    elementRef? : React.Ref<HTMLButtonElement>
    variant?: 'primary' | 'secondary'
}

export default function Button({ elementRef, variant = 'primary', className, children, ...rest }: props) {
    const cls = [styles.button, variant, className].filter(Boolean).join(' ')
    return (
        <button ref={elementRef} className={cls} {...rest}>
            {children}
        </button>
    );
}

export type ButtonProps = props
