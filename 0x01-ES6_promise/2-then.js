export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    const o = {
      status: 200,
      body: 'Success',
    };
    return o;
  }).catch(() => {
    const err = new Error();
    return err;
  }).finally(() => {
    console.log('Got a response from the API');
  });
}
