import { useContext } from 'react';
import { handleColumnVariableDrop } from '../functions/handleColumnVariableDrop';
import { handleRowVariableDrop } from '../functions/handleRowVariableDrop';
import { DndTableContext } from './dnd-table-context';
import { DropTableColumnVariable } from './drop-table-column-variable';
import { DropTableRowVariable } from './drop-table-row-variable';
import './drop-table.scss';
import { DropTarget } from './drop-target';

interface DropTableProps {
  id: string;
}

export const DropTable = ({ id }: DropTableProps): JSX.Element => {
  const dndTableContext = useContext(DndTableContext);

  return (
    <div className='drop-table-holder'>
      <table
        id={id}
        className='drop-table'
      >
        <thead>
          <tr>
            <th />
            <th className='drop-table-header-cell'>
              <DropTarget
                id={`${id}-column-header-drop-i`}
                position={{ location: 'column', index: [0] }}
                dropAction={handleColumnVariableDrop}
                height='32px'
                width='16px'
              />
            </th>
            {dndTableContext.columns.map((variable, index) => (
              <DropTableColumnVariable
                key={variable.name}
                id={`${id}-header-variable-${index}`}
                index={index}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DropTarget
                id={`${id}-header-cell-initial`}
                position={{ location: 'row', index: [0, 0] }}
                dropAction={handleRowVariableDrop}
                width='calc(100% - 1rem)'
                height='16px'
              />
            </td>
            <td />
          </tr>
          {dndTableContext.rows.map((variable, index) => (
            <DropTableRowVariable
              key={variable.name}
              id={`${id}-row-variable-${index}`}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
