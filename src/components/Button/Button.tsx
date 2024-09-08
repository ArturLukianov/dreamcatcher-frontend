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
        `}>
            {icon}
        </button>
    )
}