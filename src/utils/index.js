import objects from './objects';
import dates from './dates';
import numbers from './numbers';
import network from './network';
import * as strings from './strings';
import * as arrays from './arrays';
import booleans from './booleans';
import basics from './basics';

export default ({
  ...objects,
  ...strings,
  ...arrays,
  ...dates,
  ...numbers,
  ...network,
  ...booleans,
  ...basics,
});
