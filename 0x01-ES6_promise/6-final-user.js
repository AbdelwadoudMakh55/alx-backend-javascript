import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const allSettled = [];

  const userPromise = signUpUser(firstName, lastName)
    .then((user) => {
      allSettled.push({
        status: 'fulfilled',
        value: user,
      });
    })
    .catch((error) => {
      allSettled.push({
        status: 'rejected',
        value: error.toString(),
      });
    });

  const photoPromise = uploadPhoto(fileName)
    .then((photo) => {
      allSettled.push({
        status: 'fulfilled',
        value: photo,
      });
    })
    .catch((error) => {
      allSettled.push({
        status: 'rejected',
        value: error.toString(),
      });
    });
  return Promise.all([userPromise, photoPromise]).then(() => allSettled);
}
