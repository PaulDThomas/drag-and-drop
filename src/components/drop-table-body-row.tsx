import { useContext } from 'react';
import { DndTableContext } from './dnd-table-context';
import './drop-table-body-row.scss';

interface DropTableBodyRow {
  rowIndex: number;
}

export const DropTableBodyRow = ({ rowIndex: index }: DropTableBodyRow): JSX.Element => {
  const dndTableContext = useContext(DndTableContext);

  return (
    <>
      {dndTableContext.columns.map((variable, ci) => (
        <td key={ci}>
          <div
            className='data-cell'
            style={{ textAlign: 'center' }}
          >
            {dndTableContext.rows[index].label}
            <br />
            x
            <br />
            {variable.label}
          </div>
        </td>
      ))}
    </>
  );
};
