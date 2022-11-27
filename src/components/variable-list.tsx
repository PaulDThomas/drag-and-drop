import { useContext } from 'react';
import { DndTableContext } from './dnd-table-context';
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
      {dndTableContext.variableList.map((variable, index) => (
        <VariableHolder
          id={`${id}-${variable.name}`}
          variable={variable}
        />
      ))}
    </div>
  );
};
