import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.allSettled([uploadPhoto(), createUser()]).then((values) => {
    console.log(`${values[0].value.body} ${values[1].value.firstName} ${values[1].value.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
