const isSorted = (num = []) => {
  const sortArr = JSON.stringify([...num].sort((a, b) => a - b));
  const originalArr = JSON.stringify(num);

  if (sortArr === originalArr) {
    return true;
  }

  return false;
};

console.log(isSorted([-Infinity, -2, 1, 2, 2.5, 4]));
