import { iVariable } from './interface';

interface VariableHolderProps {
  id: string;
  variable: iVariable;
}

export const VariableHolder = ({ id, variable }: VariableHolderProps): JSX.Element => {
  return (
    <div
      id={id}
      className='variable-holder'
    >
      {variable.label}
    </div>
  );
};
