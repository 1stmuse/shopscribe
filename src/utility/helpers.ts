export const isUpperCase = (string: string) => /[A-Z]/.test(string);
export const isLowerCase = (string: string) => /[a-z]/.test(string);

export const hasNumber = (string: string) => /[0-9]/.test(string);

export const formatAmount = (value: any) =>
  Number(value)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');

export const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const checkSpecialChar = (value: string) => {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return format.test(value);
};

export const filterOnlyText = (text: string) => {
  const chars = '1234567890abcdefghijklmnopqrstuvwxyz'.split('');
  const stripped = text.split('').filter(char => char in chars);
  return stripped.join('');
};

export const capitalizeString = (sentence: string): string => {
  return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
    letter.toUpperCase(),
  );
};

export const getInitials = (text: string): string => {
  let splitWords = text.split(' ');
  if (splitWords.length > 1) {
    return `${splitWords[0][0].toUpperCase()}${splitWords[1][0].toUpperCase()}`;
  }
  return `${text.slice(0, 2).toUpperCase()}`;
};
