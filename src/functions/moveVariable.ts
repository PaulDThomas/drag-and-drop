import { iVariable } from '../components';

export const moveVariable = (
  originalArray: iVariable[],
  variable: iVariable,
  newPosition: number,
): iVariable[] => {
  const ix = originalArray.findIndex((v) => v.uid === variable.uid ?? '');
  console.log(`Moving variable to ${newPosition} from ${ix}`);
  const newArray: iVariable[] = [...originalArray];
  if (ix >= 0) {
    console.log('Moving');
    newArray.splice(ix, 1);
    newArray.splice(ix >= newPosition ? newPosition : newPosition - 1, 0, variable as iVariable);
  } else {
    console.log(`Adding`);
    newArray.splice(newPosition, 0, variable);
  }
  return newArray;
};
