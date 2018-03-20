Print = () => {
    for (let i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`number is ${i} : BizzAppz`);
        } else if (i % 5 === 0) {
            console.log(`number is ${i} : Appz`);
        } else if (i % 3 === 0) {
            console.log(`number is ${i} : Bizz”`);
        }
    }
}

Print();