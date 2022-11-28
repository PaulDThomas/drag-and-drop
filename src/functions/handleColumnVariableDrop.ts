import { DndTableContextProps } from '../components/context/dnd-table-context';
import { iPosition, iVariable } from '../components/interface';
import { moveVariable } from './moveVariable';

export const handleColumnVariableDrop = (
  position: iPosition,
  data: unknown,
  dnd: DndTableContextProps,
) => {
  // Check if data is a variable
  if (!data || !(data as iVariable).uid) return;
  else {
    const newCols = moveVariable(dnd.columns, data as iVariable, position.index[0]);
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
