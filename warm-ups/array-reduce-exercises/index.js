
const total = arr => arr.reduce((total, amount) => total + amount);


const stringConcat = arr => arr.reduce(
    (a, b) => String(a) + String(b),
    ""
);


const totalVotes = arr => arr.reduce(
    (total, curr) => {
    curr.voted ? total++ : null;
    return total
    },
    0
);

const shoppingSpree = arr => arr.reduce(
    (total, amount) => total + amount.price,
    0
);

const flatten = arr => arr.reduce(
    (a, b) => [...a, ...b],
    []
);

voterResults = arr => arr.reduce(
    (total, curr) => {
        if (curr.age < 26) {
            total.youth++;
            curr.voted ? total.youngVotes++ : null; 
            return total
        } else if (curr.age < 36) {
            total.mids++;
            curr.voted ? total.midVotes++ : null; 
            return total
         } 
         else if (curr.age < 56) {
            total.olds++;
            curr.voted ? total.oldVotes++ : null; 
            return total
        } 
    }, {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0,
    }
);

module.exports = {
    total,
    stringConcat,
    totalVotes,
    shoppingSpree,
    flatten,
    voterResults,
}