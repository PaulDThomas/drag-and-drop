import { DndTableContextProps } from '../components/dnd-table-context';
import { iPosition, iVariable } from '../components/interface';
import { moveVariable } from './moveVariable';

export const handleRowVariableDrop = (
  position: iPosition,
  data: unknown,
  dnd: DndTableContextProps,
) => {
  // Check if data is a variable
  if (!data || !(data as iVariable).uid) return;
  else {
    const newRows = moveVariable(dnd.rows, data as iVariable, position.index[0]);
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
