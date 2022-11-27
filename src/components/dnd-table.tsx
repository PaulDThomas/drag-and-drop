import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { ContextMenuProvider } from './context-menu-provider';
import { DndTableContext } from './dnd-table-context';
import './dnd-table.scss';
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
  const processedVariableList = useMemo<iVariable[]>(() => {
    const names = [...new Set(variableList.map((v) => v.name))];
    return [
      ...names.map((n) => {
        return {
          ...variableList[variableList.findIndex((v) => v.name === n)],
          uid: variableList[variableList.findIndex((v) => v.name === n)].uid ?? nanoid(),
        };
      }),
    ];
  }, [variableList]);

  return (
    <ContextMenuProvider>
      <DndTableContext.Provider
        value={{
          variableList: processedVariableList,
          ...dndTableSchema,
          setDndTableSchema,
        }}
      >
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
      </DndTableContext.Provider>
    </ContextMenuProvider>
  );
};
