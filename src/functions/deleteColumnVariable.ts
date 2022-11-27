import { DndTableContextProps } from '../components/dnd-table-context';
import { iVariable } from '../components/interface';

export const deleteColumnVariable = (index: number, dnd: DndTableContextProps) => {
  // Check if data is a variable
  if (index >= dnd.columns.length || !dnd.setDndTableSchema) return;
  else {
    console.log('Delete column variable');
    const newCols: iVariable[] = dnd.columns;
    newCols.splice(index, 1);
    dnd.setDndTableSchema({
      columns: newCols,
      rows: dnd.rows,
      target: dnd.target,
      statisticPosition: dnd.statisticPosition,
      statistics: dnd.statistics,
    });
  }
};
