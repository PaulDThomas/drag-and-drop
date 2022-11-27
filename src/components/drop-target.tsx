import { iPosition } from './interface';
import './drop-target.scss';
import { DragEvent, useContext, useState } from 'react';
import { DndTableContext, DndTableContextProps } from './dnd-table-context';
import { CircleFill } from './circle-fill';

interface DropTargetProps {
  id: string;
  position: iPosition;
  dropAction?: (position: iPosition, drop: unknown, context: DndTableContextProps) => void;
  children?: null | string | JSX.Element | (string | JSX.Element)[];
  height?: string;
  width?: string;
}

export const DropTarget = ({
  id,
  position,
  dropAction,
  children,
  height,
  width,
}: DropTargetProps): JSX.Element => {
  const [isOver, setIsOver] = useState<boolean>(false);
  const dndTableContext = useContext(DndTableContext);

  const handleDrop = (e: DragEvent) => {
    console.log('Dropped: ' + e.dataTransfer);
    setIsOver(false);
    e.stopPropagation();
    e.preventDefault();
    if (e.dataTransfer.types[0] === 'application/json') {
      try {
        const data = JSON.parse(e.dataTransfer.getData('application/json'));
        console.log('Data dropped');
        console.log(data);
        dropAction && dropAction(position, data, dndTableContext);
      } catch {
        console.warn('Something has gone wrong :(');
      }
    }
  };

  return (
    <div
      id={id}
      className={`drop-target ${isOver ? 'can-drop' : ''}`}
      onDragOver={(e) => {
        if (e.dataTransfer.types[0] === 'application/json') {
          setIsOver(true);
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onDrop={handleDrop}
      onDragLeave={() => setIsOver(false)}
      style={{
        height: height,
        width: width,
      }}
    >
      {!children ? <CircleFill /> : children}
    </div>
  );
};
