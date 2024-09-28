import React, { useMemo } from 'react';
import Stub from "../components/Stub/Stub";
import { Background, Controls, MiniMap, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { GraphNode } from '../components/GraphNode/GraphNode';

const nodes = [
    {
        id: '1', // required
        position: { x: 0, y: 0 }, // required
        type: 'graphNode',
        data: { label: 'Дом', icon: 'Home', color: '#283906' }, // required
    },
    {
        id: '2',
        position: { x: 0, y: 300 },
        type: 'graphNode',
        data: { label: 'Лес', icon: 'Trees', color: 'green' },
    }
];

const edges = [{ id: '1-2', source: '1', target: '2' }];

function Graph() {
    const nodeTypes = useMemo(() => ({ 'graphNode': GraphNode }), []);

    return (
        <div style={{ height: '90vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                defaultEdgeOptions={{ style: { stroke: 'black', strokeWidth: '2px' } }}
                proOptions={{ hideAttribution: true }}
                fitView>
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    );
}

export default function MapGraph() {
    return <Graph />
}