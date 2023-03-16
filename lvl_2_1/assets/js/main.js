let returnArray = [];
const imageArray = () => {
  for (let index = 1; index <= 100; index++) {
    const paddedIndex = index.toString().padStart(3, "0");
    returnArray.push(`${index - 1}: "image${"_"}${paddedIndex}.jpg"`);
  }
  console.log(returnArray.join("\n")); // "\n"- shift+option+7
};
imageArray();
