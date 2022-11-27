import { iPostion } from './interface';
import './drop-target.scss';

interface DropTargetProps {
  id: string;
  position: iPostion;
  children?: null | string | JSX.Element | (string | JSX.Element)[];
}

export const DropTarget = ({ id, position, children }: DropTargetProps): JSX.Element => {
  return (
    <div
      id={id}
      className='drop-target'
      onDragEnd={(e) => {
        console.log(`Dropping on ${position.location}, ${position.index.join(',')}`);
      }}
    >
      {!children ? (
        <span>
          drop
          <br />
          here
        </span>
      ) : (
        children
      )}
    </div>
  );
};
