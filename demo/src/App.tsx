import React, { Key, useRef, useState } from 'react';
import { DndTable, iDndTableSchema, iVariable } from '../../src/components';
import { mockVariables } from '../../src/__mocks__/mockVariables';

export default () => {
  const [dndTableSchema, setDndTableSchema] = useState<iDndTableSchema>({
    rows: [],
    columns: [],
    statisticPosition: 'row',
    statistics: [],
  });
  const varList = useRef<iVariable[]>(mockVariables);

  return (
    <div className='container'>
      <div
        style={{
          margin: '1rem',
          padding: '0 1rem',
          border: '1px solid black',
          borderRadius: '4px',
          backgroundColor: 'white',
        }}
      >
        <div style={{ height: 'calc(96vh - 2rem - 2px)' }}>
          <h4>Drag and drop table</h4>
          <DndTable
            id='main-table'
            variableList={varList.current}
            dndTableSchema={dndTableSchema}
            setDndTableSchema={(ret) => {
              console.log(ret);
              setDndTableSchema(ret);
            }}
          />
        </div>
      </div>
    </div>
  );
};
