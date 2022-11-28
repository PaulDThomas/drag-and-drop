import { DndTableContextProps } from '../components/context/dnd-table-context';
import { iVariable } from '../components/interface';

export const deleteRowVariable = (index: number, dnd: DndTableContextProps) => {
  // Check if data is a variable
  if (index >= dnd.rows.length || !dnd.setDndTableSchema) return;
  else {
    console.log('Delete row variable');
    const newRows: iVariable[] = dnd.rows;
    newRows.splice(index, 1);
    dnd.setDndTableSchema({
      columns: dnd.columns,
      rows: newRows,
      target: dnd.target,
      statisticPosition: dnd.statisticPosition,
      statistics: dnd.statistics,
    });
  }
};
