import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const values = await Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)]);
  const arr = [];
  for (const value of values) {
    const val = value.status === 'fulfilled' ? value.value : value.reason;
    const o = {
      status: value.status,
      value: val,
    };
    arr.push(o);
  }
  return arr;
}
