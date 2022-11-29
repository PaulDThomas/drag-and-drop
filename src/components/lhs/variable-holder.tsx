import React, { useState } from 'react';
import { iVariable } from '../interface';
import './variable-holder.scss';

interface VariableHolderProps {
  id: string;
  variable: iVariable;
}

export const VariableHolder = ({ id, variable }: VariableHolderProps): JSX.Element => {
  const [isBeingDragged, setIsBeingDragged] = useState<boolean>(false);

  const handleDragStart = (e: React.DragEvent) => {
    console.log('Drag start for ' + variable.name);
    setIsBeingDragged(true);
    e.dataTransfer.setData('application/json', JSON.stringify(variable));
  };

  const handleDragEnd = (e: React.DragEvent) => {
    console.log('Drag end for ' + variable.name);
    setIsBeingDragged(false);
  };

  return (
    <div
      id={id}
      className={`variable-holder ${isBeingDragged ? 'being-dragged' : ''}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {variable.label}
    </div>
  );
};
