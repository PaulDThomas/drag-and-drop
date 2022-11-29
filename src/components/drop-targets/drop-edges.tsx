import { iDndData } from '../interface';
import './drop-edges.scss';
import { DropTarget } from './drop-target';

interface DropEdgesProps {
  id: string;
  onDropTop?: (ret: iDndData) => void;
  onDropLeft?: (ret: iDndData) => void;
  onDropBottom?: (ret: iDndData) => void;
  onDropRight?: (ret: iDndData) => void;
  children?: null | JSX.Element | (string | JSX.Element)[];
  style?: React.CSSProperties;
  className?: string;
}

export const DropEdges = ({
  id,
  onDropTop,
  onDropLeft,
  onDropBottom,
  onDropRight,
  children,
  style,
  className,
}: DropEdgesProps): JSX.Element => {
  return (
    <div
      id={id}
      className={`${className} drop-edges`}
      style={{ ...style }}
    >
      {onDropTop && (
        <DropTarget
          id={`${id}-drop-top`}
          type='top'
          dropAction={onDropTop}
        />
      )}
      {onDropLeft && (
        <DropTarget
          id={`${id}-drop-left`}
          type='left'
          dropAction={onDropLeft}
        />
      )}{' '}
      {onDropBottom && (
        <DropTarget
          id={`${id}-drop-bottom`}
          type='bottom'
          dropAction={onDropBottom}
        />
      )}
      {onDropRight && (
        <DropTarget
          id={`${id}-drop-right`}
          type='right'
          dropAction={onDropRight}
        />
      )}
      {children}
    </div>
  );
};
