import { useContext } from 'react';
import { DndTableContext } from '../context/dnd-table-context';
import { VariableHolder } from './variable-holder';
import './variable-list.scss';

interface VariableListHolderProps {
  id: string;
}

export const VariableListHolder = ({ id }: VariableListHolderProps) => {
  const dndTableContext = useContext(DndTableContext);

  return (
    <div
      className='variable-list-holder'
      id={id}
    >
      {dndTableContext.variableList
        .filter(
          (v) =>
            !dndTableContext.columns.map((c) => c.name).includes(v.name) &&
            !dndTableContext.rows.map((r) => r.name).includes(v.name) &&
            dndTableContext.target?.name !== v.name,
        )
        .map((variable, index) => (
          <VariableHolder
            key={variable.uid ?? index}
            id={`${id}-${variable.name}`}
            variable={variable}
          />
        ))}
    </div>
  );
};
