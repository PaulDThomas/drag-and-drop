import { iVariable } from 'components';

export const mockVariables: iVariable[] = [
  {
    name: 'usubjid',
    label: 'Subject',
    type: 'number',
    restrictValues: [
      { value: 'Sub/1', valueType: 'always' },
      { value: 'Sub/2', valueType: 'always' },
      { value: 'Sub/3', valueType: 'always' },
      { value: 'Sub/4', valueType: 'always' },
    ],
  },
  {
    name: 'trt1p',
    label: 'Treatment',
    type: 'character',
    restrictValues: [
      { value: 'Low dose', valueType: 'always' },
      { value: 'High dose', valueType: 'always' },
      { value: 'Placebo', valueType: 'always' },
    ],
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    restrictValues: [
      { value: '30', valueType: 'always' },
      { value: '35', valueType: 'sometimes' },
      { value: '40', valueType: 'sometimes' },
      { value: '45', valueType: 'sometimes' },
    ],
  },
  {
    name: 'country',
    label: 'Country',
    type: 'character',
    restrictValues: [
      { value: 'France', valueType: 'sometimes' },
      { value: 'Poland', valueType: 'sometimes' },
      { value: 'Mexio', valueType: 'sometimes' },
      { value: 'Sweden', valueType: 'sometimes' },
      { value: 'United Kingdom', valueType: 'sometimes' },
      { value: 'United States', valueType: 'sometimes' },
    ],
  },
  {
    name: 'site',
    label: 'Site',
    type: 'character',
    restrictValues: [
      { value: 'center_1', valueType: 'always' },
      { value: 'center_2', valueType: 'always' },
      { value: 'center_3', valueType: 'always' },
    ],
  },
];
