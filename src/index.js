var array = [{ name: "Axelor" }, { name: "AIndia" }, { name: "France" }];

const result = array.sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt());
console.log(result);

