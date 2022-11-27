import { useContext } from 'react';
import { DndTableContext } from './dnd-table-context';
import { iVariable } from './interface';

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
        <div
          id={`${id}-${variable.name}`}
          className='variable-holder'
          // onDragStart={(e) => dragStart(e, index)}
          // onDragOver={(e) => dragEnter(e, index)}
          // onDragEnd={drop}
          key={index}
          draggable
          // style={{ backgroundColor: dragOverItem.current === index ? 'blue' : 'lightblue' }}
          // style={{ top: index * 65 }}
        >
          {variable.label}
        </div>
      ))}
    </div>
  );
};
