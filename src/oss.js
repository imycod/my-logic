
const fileFormat = (filename) => {
  const tempArr = filename.split('?')[0].split('.');
  return `${tempArr[tempArr.length - 1]}`.toLowerCase();
};


const setObsFileName = (filename) => {
  return new Date().format('YYYYMMDD') + new Date().getTime() + '.' + fileFormat(filename);
};

export {
  fileFormat,
  setObsFileName
}
