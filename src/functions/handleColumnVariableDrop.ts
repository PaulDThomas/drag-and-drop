import { DndTableContextProps } from '../components/dnd-table-context';
import { iPosition, iVariable } from '../components/interface';

export const handleColumnVariableDrop = (
  position: iPosition,
  data: unknown,
  dnd: DndTableContextProps,
) => {
  // Check if data is a variable
  if (
    !data ||
    !(data as iVariable).uid ||
    dnd.columns.map((v) => v.uid).includes((data as iVariable).uid)
  )
    return;
  else {
    console.log('Handle column variable drop');
    const newCols: iVariable[] = dnd.columns;
    newCols.splice(position.index[0], 0, data as iVariable);
    dnd.setDndTableSchema &&
      dnd.setDndTableSchema({
        columns: newCols,
        rows: dnd.rows.filter((v) => v.uid !== (data as iVariable).uid),
        target: dnd.target,
        statisticPosition: dnd.statisticPosition,
        statistics: dnd.statistics,
      });
  }
};
