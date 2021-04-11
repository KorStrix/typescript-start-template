import { getCommandArg } from './src/commandline';
import is from './src/is';

enum CommandArg {
  script,
}

const script = getCommandArg('script');
if (is.define(script)) {
}
console.log(`main ${script}`);
