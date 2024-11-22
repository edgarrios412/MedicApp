import moment from 'moment';

export function ExtraerDatosCedula(data) {
  let dataString = data.replaceAll('�', ' ');

  if (!dataString) {
    throw new Error('Barcode data is missing or invalid.');
  }

  if (!dataString.includes('PubDSK_1')) {
    throw new Error('Invalid barcode data, only PubDSK_1 is supported.');
  }

  dataString = dataString.replace('PubDSK_1', '0');
  
  const alphaMatch = dataString.match('[a-zA-Z]');
  if (!alphaMatch) {
    throw new Error('Invalid data format: no alphabetic characters found.');
  }
  const sI = alphaMatch.index;
  dataString = dataString.substring(sI - 10);

  const btMatch = dataString.match('[+]|-');
  if (!btMatch) {
    throw new Error('Invalid data format: blood type indicator (+ or -) not found.');
  }

  const btIndex = btMatch.index;
  let usableData = dataString.substring(0, btIndex + 1).replace(/  +/g, ' ');
  const dataArray = usableData.split(' ');

  if (dataArray.length < 3) {
    throw new Error('Invalid data format: insufficient fields.');
  }

  const firstAlpha = dataArray[0].match('[a-zA-Z]').index;
  const document = Number(dataArray[0].substring(0, firstAlpha)).toString();
  const lastname1 = capitalize(dataArray[0].substring(firstAlpha));
  const lastname2 = dataArray.length > 3 ? capitalize(dataArray[1]) : undefined;
  const name1 = dataArray.length > 3 ? capitalize(dataArray[2]) : capitalize(dataArray[1]);
  const name2 = dataArray.length > 4 ? capitalize(dataArray[3]) : undefined;

  const extraData = dataArray.length > 4 ? dataArray[4] : dataArray.length > 3 ? dataArray[3] : dataArray[2];

  const genderMatch = extraData.match(/M|F/);
  if (!genderMatch) {
    throw new Error('Invalid data format: gender (M/F) not found.');
  }

  const genderIndex = genderMatch.index;
  const gender = extraData.substring(genderIndex, genderIndex + 1) === 'M' ? 'MALE' : 'FEMALE';
  const birthDate = moment(`${extraData.substring(genderIndex + 1, genderIndex + 9)}`, 'YYYYMMDD').format('YYYY/MM/DD');
  const bloodType = extraData.substring(genderIndex + 15, genderIndex + 17);
  const municipalityCode = extraData.substring(genderIndex + 10, genderIndex + 12);
  const departmentCode = extraData.substring(genderIndex + 12, genderIndex + 15);

  return {
    document,
    lastname1,
    lastname2,
    name1,
    name2,
    gender,
    birthDate,
    bloodType,
    fullName: `${name1}${name2 ? ` ${name2}` : ''} ${lastname1} ${lastname2 || ''}`.trim(),
    municipalityCode,
    departmentCode,
  };
}

function capitalize(string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
