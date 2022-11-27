import { createContext } from 'react';
import { iDndTableSchema, iVariable } from './interface';

export interface DndTableContextProps extends iDndTableSchema {
  variableList: iVariable[];
  setDndTableSchema?: (ret: iDndTableSchema) => void;
}

export const DndTableContext = createContext<DndTableContextProps>({
  variableList: [],
  rows: [],
  columns: [],
  statisticPosition: 'row',
  statistics: [],
});
