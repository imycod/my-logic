
let tree = [
  { id: 7, pid: 0, name: 'child2.2' },
  { id: 1, pid: 1, name: 'root' },
  { id: 2, pid: 1, name: 'child1' },
  { id: 3, pid: 1, name: 'child2' },
  { id: 4, pid: 2, name: 'child1.1' },
  { id: 5, pid: 2, name: 'child1.2' },
  { id: 6, pid: 3, name: 'child2.1' },
];


let obj = {}
for (const key in obj) {
  console.log("key", key);
}
