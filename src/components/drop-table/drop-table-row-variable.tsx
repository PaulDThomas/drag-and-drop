import { useCallback, useContext, useMemo } from 'react';
import { deleteRowVariable } from '../../functions/deleteRowVariable';
import { handleRowVariableDrop } from '../../functions/handleRowVariableDrop';
import { iMenuItem, MenuContext } from '../context/context-menu-provider';
import { DndTableContext } from '../context/dnd-table-context';
import { DropEdges } from '../drop-targets/drop-edges';
import { iVariable } from '../interface';
import { VariableHolder } from '../lhs/variable-holder';
import { DropTableBodyRow } from './drop-table-body-row';
import './drop-table-row-variable.scss';

interface DropTableHeaderVariableProps {
  id: string;
  index: number;
}

export const DropTableRowVariable = ({ id, index }: DropTableHeaderVariableProps): JSX.Element => {
  const dndTableContext = useContext(DndTableContext);
  const menuContext = useContext(MenuContext);
  const variable = useMemo<iVariable>(() => dndTableContext.rows[index], [index]);

  const showMenu = useCallback(
    (e: React.MouseEvent<HTMLTableCellElement>) => {
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
    },
    [dndTableContext],
  );

  return (
    <tr key={variable.name}>
      <td
        onContextMenu={showMenu}
        style={{ position: 'relative' }}
      >
        <DropEdges
          className='cell-holder'
          id={`${id}`}
          onDropBottom={(ret) =>
            handleRowVariableDrop({ location: 'row', index: [index + 1] }, ret, dndTableContext)
          }
        >
          <VariableHolder
            id={`${id}-column-header-${index}`}
            variable={variable}
          />
        </DropEdges>
      </td>
      <DropTableBodyRow rowIndex={index} />
    </tr>
  );
};
