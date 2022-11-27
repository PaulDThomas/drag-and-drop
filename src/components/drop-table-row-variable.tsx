import { deleteRowVariable } from '../functions/deleteRowVariable';
import { handleRowVariableDrop } from '../functions/handleRowVariableDrop';
import { useCallback, useContext, useMemo } from 'react';
import { iMenuItem, MenuContext } from './context-menu-provider';
import { DndTableContext } from './dnd-table-context';
import { DropTableBodyRow } from './drop-table-body-row';
import { DropTarget } from './drop-target';
import { iVariable } from './interface';
import { VariableHolder } from './variable-holder';
import './drop-table-row-variable.scss';

interface DropTableHeaderVariableProps {
  id: string;
  index: number;
}

export const DropTableRowVariable = ({ id, index }: DropTableHeaderVariableProps): JSX.Element => {
  const dndTableContext = useContext(DndTableContext);
  const menuContext = useContext(MenuContext);
  const variable = useMemo<iVariable>(() => dndTableContext.rows[index], [index]);

  const showMenu = useCallback((e: React.MouseEvent<HTMLTableCellElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('CM' + e.pageX + e.pageY);
    const menuItems: iMenuItem[] = [
      { label: 'Remove', action: () => deleteRowVariable(index, dndTableContext) },
    ];
    menuContext &&
      menuContext.set({
        visible: true,
        y: e.pageY,
        x: e.pageX,
        menuItems: menuItems,
      });
  }, []);

  return (
    <tr key={variable.name}>
      <td onContextMenu={showMenu}>
        <div className='cell-holder'>
          <VariableHolder
            id={`${id}-column-header-${index}`}
            variable={variable}
          />
          <DropTarget
            id={`${id}-column-header-drop-${index + 1}`}
            position={{ location: 'column', index: [index + 1] }}
            dropAction={handleRowVariableDrop}
            height='calc(100% - 1rem)'
            width='16px'
          />
        </div>
      </td>
      <td />
      <DropTableBodyRow rowIndex={index} />
    </tr>
  );
};
