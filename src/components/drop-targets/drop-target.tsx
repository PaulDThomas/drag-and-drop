import { DragEvent, useContext, useState } from 'react';
import { DndTableContext } from '../context/dnd-table-context';
import { iDndData } from '../interface';
import './drop-target.scss';

interface DropTargetProps {
  id: string;
  dropAction?: (ret: iDndData) => void;
  children?: null | string | JSX.Element | (string | JSX.Element)[];
  style?: React.CSSProperties;
  type?: 'top' | 'left' | 'bottom' | 'right';
}

export const DropTarget = ({
  id,
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
        dropAction && dropAction(data);
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
