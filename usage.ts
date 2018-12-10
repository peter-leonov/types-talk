const inner1 = (n: number) => n;
// first try renaming
// const inner2 = (n: never) => n;
const inner2 = (n: number) => n;

declare function outer<T extends boolean>(
  x: T
): T extends true ? typeof inner1 : typeof inner2;

outer(true)(1);
outer(false)(2);
outer(false)(3);
outer(true)(4);
outer(false)(5);
outer(true)(6);
outer(true)(7);
outer(false)(8);
outer(true)(9);
