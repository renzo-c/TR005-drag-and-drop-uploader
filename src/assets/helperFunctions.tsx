export const isValidFormat = fileFormat => {
  const allowedFormats = ['jpeg', 'png'];

  if (!allowedFormats.filter(n => n === fileFormat)[0]) return false;
  return true;
};