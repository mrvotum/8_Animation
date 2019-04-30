export default function randomCount() {
  let rand = 0.5 + Math.random() * 4;
  rand = Math.round(rand);
  return rand;
}