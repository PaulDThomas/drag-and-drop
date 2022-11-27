import { iVariable } from './interface';
import './variable-holder.scss';

interface VariableHolderProps {
  id: string;
  variable: iVariable;
}

export const VariableHolder = ({ id, variable }: VariableHolderProps): JSX.Element => {
  return (
    <div
      id={id}
      className='variable-holder'
      draggable
    >
      {variable.label}
    </div>
  );
};
