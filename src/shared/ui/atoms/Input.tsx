import React from 'react';
import styles from '@/shared/ui/atoms/Input.module.css';

type props = React.InputHTMLAttributes<HTMLInputElement> & {
    elementRef?: React.Ref<HTMLInputElement>
    variant?: 'primary' | 'secondary'
}

export default function Input({ elementRef, variant = 'primary', className = '', children, ...rest }: props) {
    const cls = [styles.input, variant === 'secondary' ? styles.secondary : styles.primary, className ].filter(Boolean).join(' ');
    return (
        <input ref={elementRef} className={cls} {...rest}/>        
    );
}

export type InputProps = props;