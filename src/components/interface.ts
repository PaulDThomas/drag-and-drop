export interface iValue {
  value: string;
  valueType: 'always' | 'sometimes' | 'never';
}

export type iVariable = {
  name: string;
  label: string;
  type: 'number' | 'character' | 'date' | 'time' | 'datetime';
  restrictValues?: iValue[];
};

export enum eStatistic {
  n = 'n',
  pct = '%',
  mean = 'n',
  sd = 'SD',
  p0 = 'Min',
  p25 = 'Q1',
  p50 = 'Median',
  p75 = 'Q3',
  p100 = 'Max',
}

export interface iDndTableSchema {
  columns: iVariable[];
  rows: iVariable[];
  target?: iVariable;
  statistics: eStatistic[];
  statisticPosition: 'row' | 'column';
}

export interface iPosition {
  location: 'row' | 'column';
  index: number[];
}
