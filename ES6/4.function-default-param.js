// Es5

// function func(a, b) {

//     // if (!a) {
//     //     a = 1;
//     // }
//     // if (!b) {
//     //     b = 2;
//     // }

//     // or

//     a = a || 1;
//     b = b || 2;

//     console.log(a);
//     console.log(b);
// }

// func();

// Es6

function func(a=1, b=2) {
    console.log(a);
    console.log(b);
}

func(undefined,2)