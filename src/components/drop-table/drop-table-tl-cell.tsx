import { useContext } from 'react';
import { handleColumnVariableDrop } from '../../functions/handleColumnVariableDrop';
import { handleRowVariableDrop } from '../../functions/handleRowVariableDrop';
import { DndTableContext } from '../context/dnd-table-context';
import { DropEdges } from '../drop-targets/drop-edges';
import './drop-table-tl-cell.scss';

interface DropTableTLCellProps {
  id: string;
}

export const DropTableTLCell = ({ id }: DropTableTLCellProps): JSX.Element => {
  const dndTableContext = useContext(DndTableContext);
  return (
    <th>
      <DropEdges
        className='tl-cell-holder'
        id={`${id}-drop-edges`}
        onDropBottom={(ret) =>
          handleRowVariableDrop({ location: 'row', index: [0] }, ret, dndTableContext)
        }
        onDropRight={(ret) =>
          handleColumnVariableDrop({ location: 'column', index: [0] }, ret, dndTableContext)
        }
      />
    </th>
  );
};
