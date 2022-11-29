import { DndTableContextProps } from '../components/context/dnd-table-context';
import { iDndData, iPosition, iVariable } from '../components/interface';
import { moveVariable } from './moveVariable';

export const handleRowVariableDrop = (
  position: iPosition,
  data: unknown,
  dnd: DndTableContextProps,
) => {
  // Check if data is a variable
  if (!data || (data as iDndData).type !== 'variable') return;
  else {
    const newRows = moveVariable(dnd.rows, (data as iDndData).data as iVariable, position.index[0]);
    dnd.setDndTableSchema &&
      dnd.setDndTableSchema({
        columns: dnd.columns.filter((v) => v.uid !== ((data as iDndData).data as iVariable).uid),
        rows: newRows,
        target: dnd.target,
        statisticPosition: dnd.statisticPosition,
        statistics: dnd.statistics,
      });
  }
};
