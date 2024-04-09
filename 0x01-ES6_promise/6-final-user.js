import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const arr = [];
      const error = values[1].reason;
      const obj = {
        status: values[1].status,
        value: error,
      };
      arr.push(values[0]);
      arr.push(obj);
      return arr;
    });
}
