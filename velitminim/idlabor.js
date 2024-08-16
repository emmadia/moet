let allParents = [];

let parents = [
    { name: "John Doe", age: 40, children: ["Jane", "Jack"] },
    { name: "Mary Smith", age: 35, children: ["Tommy", "Anna"] },
    { name: "Alice Johnson", age: 45, children: ["Chris"] }
];

// Add each parent object to the allParents array
for (let i = 0; i < parents.length; i++) {
    allParents.push(parents[i]);
}

// Alternatively, use the spread operator to add all at once
// allParents.push(...parents);

console.log(allParents);
