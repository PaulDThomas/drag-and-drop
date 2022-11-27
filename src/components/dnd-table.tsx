import { ContextMenuProvider } from '@asup/tree-of-nodes';
import { useRef } from 'react';
import './dnd-table.scss';
import { DndTableContext } from './dnd-table-context';
import { DropTable } from './drop-table';
import { iDndTableSchema, iVariable } from './interface';
import { VariableListHolder } from './variable-list';

interface DndTableProps {
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
}: DndTableProps): JSX.Element => {
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
    <DndTableContext.Provider
      value={{
        variableList,
        ...dndTableSchema,
        setDndTableSchema,
      }}
    >
      <ContextMenuProvider>
        <div
          id={id}
          className='dndtable-main'
        >
          <div className='dndtable-lhs'>
            <VariableListHolder id={`${id}-variable-list-holder`} />
          </div>
          <div className='dndtable-rhs'>
            <DropTable id={`${id}-drop-table`} />
          </div>
        </div>
      </ContextMenuProvider>
    </DndTableContext.Provider>
  );
};
