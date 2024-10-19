import React, { useRef, useState } from 'react';
import { Stage, Layer, Rect, Image, Group } from 'react-konva';
import { useNavigate } from 'react-router-dom';
// import useImage from 'use-image';
import { useDrop, useDrag } from 'react-dnd';
import { PersonStandingIcon } from 'lucide-react';
import useImage from 'use-image';


function PersonIconComponent() {
    const [{ isDragging }, drag] = useDrag({
        type: 'person',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <PersonStandingIcon
            ref={drag}

            style={{
                width: '50px',
                height: '50px',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                position: 'absolute',
                bottom: '20px',
                left: '20px',
            }}
        />
    );
}

const mapObjects = [
    {
        name: 'Building 1',
        type: 'building',
        position: { x: 100, y: 100 },
        size: { width: 200, height: 100 },
        color: 'gray',
    },
    {
        name: 'Park',
        type: 'park',
        position: { x: 400, y: 200 },
        size: { width: 150, height: 150 },
        color: 'green',
    },
    // Add more objects as needed
];


export default function MapStreet() {
    const [stageScale, setStageScale] = useState(1);
    const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });
    const [personPosition, setPersonPosition] = useState({ x: 50, y: 50 });
    const [personVisible, setPersonVisible] = useState(true);
    const [personDragging, setPersonDragging] = useState(false);
    const navigate = useNavigate();

    const stageRef = useRef();
    const [personImage] = useImage("");

    const handleWheel = (e) => {
        e.evt.preventDefault();

        const scaleBy = 1.05;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();

        const mousePointTo = {
            x: (stage.getPointerPosition().x - stage.x()) / oldScale,
            y: (stage.getPointerPosition().y - stage.y()) / oldScale,
        };

        const newScale =
            e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        setStageScale(newScale);

        const newPos = {
            x: stage.getPointerPosition().x - mousePointTo.x * newScale,
            y: stage.getPointerPosition().y - mousePointTo.y * newScale,
        };

        setStagePosition(newPos);
    };

    const handlePersonDragStart = () => {
        setPersonDragging(true);
    };

    const handlePersonDragEnd = (e) => {
        setPersonDragging(false);
        const x = e.target.x();
        const y = e.target.y();
        setPersonPosition({ x, y });

        // Navigate to '/map/fpv' when the person is dropped
        navigate('/map/fpv');
    };
     return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        cursor: personDragging ? 'grabbing' : 'grab',
      }}
    >
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        scaleX={stageScale}
        scaleY={stageScale}
        x={stagePosition.x}
        y={stagePosition.y}
        draggable
        onWheel={handleWheel}
        ref={stageRef}
      >
        <Layer>
          {/* Map Objects */}
          {mapObjects.map((obj, index) => (
            <Rect
              key={index}
              x={obj.position.x}
              y={obj.position.y}
              width={obj.size.width}
              height={obj.size.height}
              fill={obj.color}
              stroke="black"
            />
          ))}

          {/* Person Icon */}
          {personVisible && (
            <Image
              image={personImage}
              x={personPosition.x}
              y={personPosition.y}
              width={50}
              height={50}
              draggable
              onDragStart={handlePersonDragStart}
              onDragEnd={handlePersonDragEnd}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
}