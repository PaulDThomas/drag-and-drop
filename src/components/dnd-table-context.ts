import { createContext } from 'react';
import { iDndTableSchema, iVariable } from './interface';

interface DndTableContextProps extends iDndTableSchema {
  variableList: iVariable[];
}

export const DndTableContext = createContext<DndTableContextProps>({
  variableList: [],
  rows: [],
  columns: [],
  statisticPosition: 'row',
  statistics: [],
});
