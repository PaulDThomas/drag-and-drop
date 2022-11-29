import { useCallback, useContext, useMemo } from 'react';
import { deleteColumnVariable } from '../../functions/deleteColumnVariable';
import { handleColumnVariableDrop } from '../../functions/handleColumnVariableDrop';
import { iMenuItem, MenuContext } from '../context/context-menu-provider';
import { DndTableContext } from '../context/dnd-table-context';
import { DropEdges } from '../drop-targets/drop-edges';
import { iVariable } from '../interface';
import { VariableHolder } from '../lhs/variable-holder';
import './drop-table-column-variable.scss';

interface DropTableHeaderVariableProps {
  id: string;
  index: number;
}

export const DropTableColumnVariable = ({
  id,
  index,
}: DropTableHeaderVariableProps): JSX.Element => {
  const dndTableContext = useContext(DndTableContext);
  const menuContext = useContext(MenuContext);
  const variable = useMemo<iVariable>(() => dndTableContext.columns[index], [index]);

  const showMenu = useCallback((e: React.MouseEvent<HTMLTableCellElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('CM' + e.pageX + e.pageY);
    const menuItems: iMenuItem[] = [
      { label: 'Remove', action: () => deleteColumnVariable(index, dndTableContext) },
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
    <th
      key={variable.name}
      onContextMenu={showMenu}
      style={{ position: 'relative' }}
    >
      <DropEdges
        id={id}
        className='cell-holder'
        onDropRight={(ret) =>
          handleColumnVariableDrop({ location: 'column', index: [index + 1] }, ret, dndTableContext)
        }
      >
        <VariableHolder
          id={`${id}-column-header-${index}`}
          variable={variable}
        />
      </DropEdges>
    </th>
  );
};
