import { useContext } from 'react';
import { DndTableContext } from '../context/dnd-table-context';
import { VariableHolder } from './variable-holder';
import './statistic-list.scss';
import { eStatistic } from '../interface';
import { StatisticHolder } from './statistic-holder';

interface StatisticListHolderProps {
  id: string;
}

export const StatisticListHolder = ({ id }: StatisticListHolderProps) => {
  const dndTableContext = useContext(DndTableContext);

  return (
    <div
      className='statistic-list-holder'
      id={id}
    >
      {Object.values(eStatistic).map((stat, i) => (
        <StatisticHolder
          statistic={stat}
          id={`${id}-${stat}`}
          key={i}
        />
      ))}
    </div>
  );
};
