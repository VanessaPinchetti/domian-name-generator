let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let newArray = [];
for (let i in pronoun)
    for (let x in adj)
        for (let c in noun)
            newArray.push(pronoun[i] + adj[x] + noun[c] + ".com");
console.log(newArray);
