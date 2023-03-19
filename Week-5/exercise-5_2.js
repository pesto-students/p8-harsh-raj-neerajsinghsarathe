function vowelCount(string) {
  const map = new Map([
    ["A", 0],
    ["E", 0],
    ["I", 0],
    ["O", 0],
    ["U", 0],
  ]);
  if (!string) {
    return map;
  }
  string = string.toUpperCase();
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "A":
        map.set("A", map.get("A") + 1);
        break;
      case "E":
        map.set("E", map.get("E") + 1);
        break;
      case "I":
        map.set("I", map.get("I") + 1);
        break;
      case "O":
        map.set("O", map.get("O") + 1);
        break;
      case "U":
        map.set("U", map.get("U") + 1);
        break;
      default:
        break;
    }
  }
  return map;
}

console.log(
  vowelCount(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex distinctio sint vero natus deleniti mollitia ipsum unde sed? Ex necessitatibus perferendis unde quo, animi natus quibusdam facere voluptatum iste minima distinctio, sint eaque consequatur doloribus magni. Sit dignissimos mollitia culpa voluptatem nisi illo ratione ex soluta, hic unde explicabo similique, corrupti eos molestiae labore facilis ea officiis magni sequi blanditiis. Excepturi unde nulla vitae ducimus at delectus eius incidunt, recusandae esse dolorum, tenetur corporis facilis? Rerum at rem, optio quod labore repudiandae vel dolorum voluptate molestiae ullam quaerat aut. Reiciendis voluptatem quam, commodi voluptas quod consectetur eius debitis?"
  )
);
