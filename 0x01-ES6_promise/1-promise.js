export default function getFullResponseFromAPI(success) {
  const p = new Promise((resolve, reject) => {
    if (success === true) {
      const o = {
        status: 200,
        body: 'Success',
      };
      resolve(o);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return p;
}
