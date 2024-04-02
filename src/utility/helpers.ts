import {SectionData} from '../types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
import {
  launchCamera,
  launchImageLibrary,
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';

export const formatWithdrawalsHistoryData = (transa: []) => {
  let data: SectionData[] = [];
  let dataWithDay: Record<string, []> = {};
  transa?.map((th: any) => {
    const day = getDateRangeByGroup(th?.date);
    !dataWithDay[day] ? (dataWithDay[day] = [th]) : dataWithDay[day].push(th);
  });

  if (dataWithDay) {
    for (const day in dataWithDay) {
      data.push({
        title: day,
        data: dataWithDay[day],
      });
    }
  }

  return data;
};

export function getDateRangeByGroup(date) {
  var REFERENCE = dayjs();

  var TODAY = dayjs(date).isSame(REFERENCE, 'day');

  var YESTERDAY = REFERENCE.subtract(1, 'day')
    .startOf('day')
    .format('YYYY-MM-DD');

  var fromNow = dayjs(date).fromNow();

  if (TODAY) {
    return 'Today';
  } else if (YESTERDAY === date) {
    return 'Yesterday';
  } else if (REFERENCE.diff(dayjs(date), 'days') === 1) {
    return '2 days ago';
  } else if (REFERENCE.diff(dayjs(date), 'days') === 2) {
    return '3 days ago';
  } else if (REFERENCE.diff(dayjs(date), 'days') === 3) {
    return '4 days ago';
  } else if (REFERENCE.diff(dayjs(date), 'days') === 4) {
    return '5 days ago';
  } else if (REFERENCE.diff(dayjs(date), 'days') === 5) {
    return '6 days ago';
  } else if (REFERENCE.diff(dayjs(date), 'days') <= 7) {
    return 'Last week';
  } else if (REFERENCE.diff(dayjs(date), 'days') <= 14) {
    return 'Two weeks ago';
  } else if (REFERENCE.diff(dayjs(date), 'days') <= 21) {
    return 'Three week ago';
  } else if (REFERENCE.diff(dayjs(date), 'days') <= 28) {
    return 'Four weeks ago';
  } else {
    return fromNow;
  }
}

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

type LaunchType = 'camera' | 'upload';

export const pickImage = async (
  type: LaunchType,
  onPick: (error?: any, imgUrl?: string) => void,
) => {
  let imgOptions: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 1,
    presentationStyle: 'popover',
  };

  let response: ImagePickerResponse;

  try {
    if (type === 'camera') {
      response = await launchCamera(imgOptions);
    } else {
      response = await launchImageLibrary(imgOptions);
    }

    onPick(null, response.assets?.[0].uri as string);
  } catch (error) {
    onPick('Error Picking Image', undefined);
  }
};
