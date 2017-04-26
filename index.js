function map(collection) {
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    console.log(element);
  }
}



const transformedAutobotsWithMap = autobots.map(function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

console.log(transformedAutobotsWithMap);
