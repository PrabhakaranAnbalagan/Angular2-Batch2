// backgound

// function func(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.dir(arguments);
// }

// func(12,13,14);


// Es6


function func(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(Array.isArray(rest));
    console.log(rest);
}

func(1, 2, 3, 4, 5, 6, 7, 8, 9);