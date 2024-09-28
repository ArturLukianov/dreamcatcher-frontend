import React from 'react';
import { Handle, Position } from '@xyflow/react';
import * as lucideIcons from 'lucide-react';
import { css } from '@emotion/css';

export function GraphNode({ data }: { data: { label: string; icon: string; color: string } }) {
    const { icon, label, color } = data;
    console.log(icon);
    const iconElement = React.createElement(lucideIcons[icon], {
        size: '50px',
        color,
    });
    console.log(iconElement);
    return (
        <>
            <Handle type="target" position={Position.Top} style={{ visibility: 'hidden' }} />
            <div className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
                `}>
                {iconElement}
                {label}
            </div>
            <Handle type="source" position={Position.Bottom} id="a" style={{ visibility: 'hidden' }} />
        </>
    );
}