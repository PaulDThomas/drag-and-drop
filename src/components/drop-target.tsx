import { DragEvent, useContext, useState } from 'react';
import { DndTableContext, DndTableContextProps } from './context/dnd-table-context';
import './drop-target.scss';
import { iPosition } from './interface';

interface DropTargetProps {
  id: string;
  position: iPosition;
  dropAction?: (position: iPosition, drop: unknown, context: DndTableContextProps) => void;
  children?: null | string | JSX.Element | (string | JSX.Element)[];
  style?: React.CSSProperties;
  type?: 'horizontal' | 'vertical';
}

export const DropTarget = ({
  id,
  position,
  dropAction,
  children,
  style,
  type,
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
      className={`drop-target ${isOver ? 'can-drop' : ''} ${type}`}
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
        ...style,
      }}
    >
      {!children ? <>&#8203;</> : children}
    </div>
  );
};
