import { useRef } from 'react';
import { iDndTableSchema, iVariable } from './interface';
import './dnd-table.css';

interface iDndTable {
  id: string;
  dndTableSchema: iDndTableSchema;
  setDndTableSchema: (ret: iDndTableSchema) => void;
  variableList: iVariable[];
}

export const DndTable = ({
  id,
  dndTableSchema,
  setDndTableSchema,
  variableList,
}: iDndTable): JSX.Element => {
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const dragStart = (e: React.DragEvent, position: number) => {
    // dragItem.current = position;
  };

  const dragEnter = (e: React.DragEvent, position: number | null) => {
    // dragOverItem.current = position;
  };

  const drop = (e: React.DragEvent) => {
    // const copyListItems = [...list];
    // if (
    //   dragItem.current !== null &&
    //   dragOverItem.current !== null &&
    //   dragOverItem.current !== dragItem.current
    // ) {
    //   console.log(`That didn't work for ${dragItem.current} and ${dragOverItem.current}`);
    //   const dragItemContent = copyListItems[dragItem.current];
    //   copyListItems.splice(dragItem.current, 1);
    //   copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    //   dragItem.current = null;
    //   dragOverItem.current = null;
    //   setDndTableSchema(copyListItems);
    // } else {
    //   console.log(`That didn't work for ${dragItem.current} and ${dragOverItem.current}`);
    // }
  };

  return (
    <div
      id={id}
      className='dndtable-main'
    >
      <div className='variable-list-holder'>
        {variableList.map((item, index) => (
          <div
            className=''
            // className='resizable'
            onDragStart={(e) => dragStart(e, index)}
            // onDragOver={(e) => dragEnter(e, index)}
            // onDragEnd={drop}
            key={index}
            draggable
            // style={{ backgroundColor: dragOverItem.current === index ? 'blue' : 'lightblue' }}
            // style={{ top: index * 65 }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
