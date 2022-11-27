import { DndTableContextProps } from '../components/dnd-table-context';
import { iPosition, iVariable } from '../components/interface';

export const handleRowVariableDrop = (
  position: iPosition,
  data: unknown,
  dnd: DndTableContextProps,
) => {
  // Check if data is a variable
  if (
    !data ||
    !(data as iVariable).uid ||
    dnd.rows.map((v) => v.uid).includes((data as iVariable).uid)
  )
    return;
  else {
    console.log('Handle row variable drop');
    const newRows: iVariable[] = dnd.rows;
    newRows.splice(position.index[0], 0, data as iVariable);
    dnd.setDndTableSchema &&
      dnd.setDndTableSchema({
        columns: dnd.columns.filter((v) => v.uid !== (data as iVariable).uid),
        rows: newRows,
        target: dnd.target,
        statisticPosition: dnd.statisticPosition,
        statistics: dnd.statistics,
      });
  }
};
