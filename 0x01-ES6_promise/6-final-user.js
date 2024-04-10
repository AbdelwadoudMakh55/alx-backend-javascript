import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName).then((value) => ({
    status: 'fulfilled',
    value,
  })).catch((error) => ({
    status: 'rejected',
    value: error,
  }));
  const uploadPhotoPromise = uploadPhoto(fileName).then((value) => ({
    status: 'fulfilled',
    value,
  })).catch((error) => ({
    status: 'rejected',
    value: error,
  }));
  const result = await Promise.all([signUpPromise, uploadPhotoPromise]);
  return result;
}
