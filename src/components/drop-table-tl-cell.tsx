import { handleColumnVariableDrop } from '../functions/handleColumnVariableDrop';
import { handleRowVariableDrop } from '../functions/handleRowVariableDrop';
import './drop-table-tl-cell.scss';
import { DropTarget } from './drop-target';

interface DropTableTLCellProps {
  id: string;
}

export const DropTableTLCell = ({ id }: DropTableTLCellProps): JSX.Element => {
  return (
    <th
      style={{
        position: 'relative',
      }}
    >
      <div className='tl-cell-holder'></div>
      <DropTarget
        id={`${id}-column-header-drop-i`}
        type='vertical'
        position={{ location: 'column', index: [0] }}
        dropAction={handleColumnVariableDrop}
      />
      <DropTarget
        id={`${id}-row-header-drop-i`}
        type='horizontal'
        position={{ location: 'row', index: [0] }}
        dropAction={handleRowVariableDrop}
      />
    </th>
  );
};
