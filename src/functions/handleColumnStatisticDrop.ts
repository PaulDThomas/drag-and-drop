import { DndTableContextProps } from '../components/context/dnd-table-context';
import { eStatistic, iDndData, iPosition, iVariable } from '../components/interface';
import { moveStatistic } from './moveStatistic';
import { moveVariable } from './moveVariable';

export const handleStatisticDrop = (
  position: iPosition,
  data: unknown,
  dnd: DndTableContextProps,
) => {
  // Check if data is a variable
  if (!data || (data as iDndData).type !== 'statistic') return;
  else {
    const newStatistics = moveStatistic(
      dnd.statistics,
      (data as iDndData).data as eStatistic,
      position.index[0],
    );
    dnd.setDndTableSchema &&
      dnd.setDndTableSchema({
        columns: dnd.columns,
        rows: dnd.rows,
        target: dnd.target,
        statisticPosition: position.location,
        statistics: newStatistics,
      });
  }
};
