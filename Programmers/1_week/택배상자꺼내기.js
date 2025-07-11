function solution(n, w, num) {
  const row = Math.floor((num - 1) / w);
  const pos = (num - 1) % w;
  const col = row % 2 === 0 ? pos : w - 1 - pos;
  const totalRows = Math.ceil(n / w);
  
  let count = 0;
  for (let r = row; r < totalRows; r++) {
    const start = r * w + 1;
    const idx = r % 2 === 0 ? col : w - 1 - col;
    const boxNum = start + idx;
    if (boxNum <= n) count++;
  }
  
  return count;
}
/** 타입스크립트 마이그레이션
 
function solution(n: number, w: number, num: number): number {
  const row: number = Math.floor((num - 1) / w);
  const pos: number = (num - 1) % w;
  const col: number = row % 2 === 0 ? pos : w - 1 - pos;
  const totalRows: number = Math.ceil(n / w);

  let count = 0;

  for (let r = row; r < totalRows; r++) {
    const start = r * w + 1;
    const idx = r % 2 === 0 ? col : w - 1 - col;
    const boxNum = start + idx;

    if (boxNum <= n) count++;
  }

  return count;
}
  */