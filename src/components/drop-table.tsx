import { Fragment, useContext } from 'react';
import { handleColumnVariableDrop } from '../functions/handleColumnVariableDrop';
import { handleRowVariableDrop } from '../functions/handleRowVariableDrop';
import { DndTableContext } from './dnd-table-context';
import { DropTableBodyRow } from './drop-table-body-row';
import './drop-table.scss';
import { DropTarget } from './drop-target';
import { VariableHolder } from './variable-holder';

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
                id={`${id}-column-header-drop-i`}
                position={{ location: 'column', index: [0] }}
                dropAction={handleColumnVariableDrop}
              >
                first
                <br />
                column
              </DropTarget>
            </th>
            {dndTableContext.columns.map((variable, index) => (
              <th key={variable.name}>
                <div className='cell-holder'>
                  <VariableHolder
                    id={`${id}-column-header-${index}`}
                    variable={variable}
                  />
                  <DropTarget
                    id={`${id}-column-header-drop-${index + 1}`}
                    position={{ location: 'column', index: [index + 1] }}
                    dropAction={handleColumnVariableDrop}
                  >
                    +
                  </DropTarget>
                </div>
              </th>
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
              >
                first
                <br />
                row
              </DropTarget>
            </td>
          </tr>
          {dndTableContext.rows.map((variable, index) => (
            <tr>
              <td>
                <div className='cell-holder'>
                  <VariableHolder
                    id={`${id}-column-header-${index}`}
                    variable={variable}
                  />
                  <DropTarget
                    id={`${id}-column-header-drop-${index + 1}`}
                    position={{ location: 'column', index: [index + 1] }}
                    dropAction={handleRowVariableDrop}
                  >
                    +
                  </DropTarget>
                </div>
              </td>
              <DropTableBodyRow rowIndex={index} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
