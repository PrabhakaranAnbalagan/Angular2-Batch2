

console.log('-main-');

// import { productId,productName } from './pack1/mod1';

// console.log(productId);
// console.log(productName);


// or

// import { productId as id, productName as name } from './pack1/mod1';

// console.log(id);
// console.log(name);

// or

// import * as mod1 from './pack1/mod1';
// console.log(mod1.productId);
// console.log(mod1.productName);

//--------------------------------------------------
// import { productId,productName } from './pack1/mod1';

// console.log(productId);
// console.log(productName);

// productId = 1211323; // cant mutate reference imported members

//--------------------------------------------------

// import { product } from './pack1/mod1';
// // product = null;

// product.id = 123123;
// product.name = "asdasdad";


//--------------------------------------------------

import prodId, { productName,productPrice} from './pack1/mod1';
console.log(prodId);
console.log(productName);
console.log(productPrice);
