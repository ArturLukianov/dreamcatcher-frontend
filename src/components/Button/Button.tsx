import React from 'react';


export default function Button(props: {text: string, style: string}) {
    const {text, style} = props;

    return (
        <button>
            {text}
        </button>
    )
}