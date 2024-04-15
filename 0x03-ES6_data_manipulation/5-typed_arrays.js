export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw new Error('Position outside range');
  }
  const arrBuffer = new ArrayBuffer(length);
  const dv1 = new DataView(arrBuffer);
  dv1.setInt8(position, value);
  return arrBuffer;
}
