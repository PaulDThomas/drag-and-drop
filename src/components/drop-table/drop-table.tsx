import { useContext } from 'react';
import { DndTableContext } from '../context/dnd-table-context';
import { DropTableColumnVariable } from './drop-table-column-variable';
import { DropTableRowVariable } from './drop-table-row-variable';
import { DropTableTLCell } from './drop-table-tl-cell';
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
            <DropTableTLCell id={`${id}-tl-cell`} />
            {dndTableContext.columns.map((v, i) => (
              <DropTableColumnVariable
                key={v.uid ?? i}
                id={`${id}-header-variable-${i}`}
                index={i}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {dndTableContext.rows.map((v, i) => (
            <DropTableRowVariable
              key={v.uid ?? i}
              id={`${id}-row-variable-${i}`}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
