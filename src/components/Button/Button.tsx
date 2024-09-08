import { css } from '@emotion/css';
import React from 'react';
import ReactElement from 'react';


export default function Button(props: {text?: string, style?: string, icon: ReactElement}) {
    const {icon, text, style} = props;

    return (
        <button className={css`
            border: none;
            display: flex;
            padding: 5px;
            border-radius: 2px;
<<<<<<< HEAD
            color: var(--primary);
            background-color: var(--opaque);
            cursor: pointer;
            &:hover {
                color: var(--primary-focus);
            }
=======
            width: 20px
            height: 20px;
>>>>>>> 52430d5 (several layout fixes)
        `}>
            {icon}
        </button>
    )
}