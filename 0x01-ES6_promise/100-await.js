import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoUser = {
    photo: null,
    user: null,
  };
  try {
    const pic = await uploadPhoto();
    photoUser.photo = pic;
  } catch (error) {
    console.log(error);
    return photoUser;
  }
  try {
    const us = await createUser();
    photoUser.user = us;
  } catch (error) {
    return photoUser;
  }
  return photoUser;
}
