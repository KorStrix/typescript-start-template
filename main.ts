function commandArg(name: string) {
  const result = process.argv.filter((argv) => {
    return argv.trim().startsWith(name);
  });

  if (result.length == 0) {
    return '';
  }

  return result[0].split('=')[1];
}

console.log('main');
// const script = commandArg('--script');
