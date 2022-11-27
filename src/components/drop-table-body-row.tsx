import { useContext } from 'react';
import { DndTableContext } from './dnd-table-context';

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
            className='cell-holder'
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
