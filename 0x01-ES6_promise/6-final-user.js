import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [userData, photo] = await Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)]);
  const arr = [];
  const error = photo.reason;
  const obj = {
    status: photo.status,
    value: error,
  };
  arr.push(userData);
  arr.push(obj);
  return arr;
}
