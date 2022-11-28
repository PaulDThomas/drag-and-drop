import { deleteRowVariable } from '../../functions/deleteRowVariable';
import { handleRowVariableDrop } from '../../functions/handleRowVariableDrop';
import { useCallback, useContext, useMemo } from 'react';
import { iMenuItem, MenuContext } from '../context/context-menu-provider';
import { DndTableContext } from '../context/dnd-table-context';
import { DropTableBodyRow } from './drop-table-body-row';
import { DropTarget } from '../drop-target';
import { iVariable } from '../interface';
import { VariableHolder } from '../lhs/variable-holder';
import './drop-table-row-variable.scss';
import { relative } from 'path';

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
      <td
        onContextMenu={showMenu}
        style={{ position: 'relative' }}
      >
        <div className='cell-holder'>
          <VariableHolder
            id={`${id}-column-header-${index}`}
            variable={variable}
          />
          <DropTarget
            type='horizontal'
            id={`${id}-column-header-drop-${index + 1}`}
            position={{ location: 'column', index: [index + 1] }}
            dropAction={handleRowVariableDrop}
          />
        </div>
      </td>
      <DropTableBodyRow rowIndex={index} />
    </tr>
  );
};
