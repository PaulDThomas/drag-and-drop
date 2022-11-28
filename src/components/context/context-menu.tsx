import React, { useContext } from 'react';
import { contextMenuProps, MenuContext } from './context-menu-provider';
import './context-menu.scss';

export const ContextMenu = React.forwardRef<HTMLDivElement, contextMenuProps>(
  ({ entries, visible, xPos, yPos }, ref): JSX.Element => {
    ContextMenu.displayName = 'ContextMenu';
    const menuContext = useContext(MenuContext);

    return (
      <div
        ref={ref}
        className={`context-menu ${visible ? 'visible' : ''}`}
        style={{
          top: `${yPos}px`,
          left: `${xPos}px`,
        }}
      >
        {entries.map((e, i) => (
          <div
            key={i}
            className='context-menu-item'
            onClick={() => {
              if (e.action) {
                e.action();
                menuContext?.set({ visible: false });
              }
            }}
          >
            {e.label ?? ''}
          </div>
        ))}
      </div>
    );
  },
);
