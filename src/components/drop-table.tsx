import { useCallback, useContext } from 'react';
import { DndTableContext } from './dnd-table-context';
import { DropTarget } from './drop-target';
import { iVariable } from './interface';
import './drop-table.scss';

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
            <th className='drop-table-header-cell'>
              <DropTarget
                id={`${id}-header-cell-initial`}
                position={{ location: 'column', index: [0, 0] }}
              >
                first
                <br />
                column
              </DropTarget>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DropTarget
                id={`${id}-header-cell-initial`}
                position={{ location: 'row', index: [0, 0] }}
              >
                first
                <br />
                row
              </DropTarget>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
