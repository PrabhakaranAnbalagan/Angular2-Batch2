// any object with Symbol.iterator  ==> iterable objects

/*

    e.g  Array , string , etc..

*/

let idMaker = {
    id: 0,
    [Symbol.iterator]: function () {
        return {
            next: () => {
                return {
                    value: this.id > 10 ? undefined : ++this.id,
                    done: this.id > 10 ? true : false
                };
            }
        }
    }
};


// imp-note

// if an object iterable

// for (let id of idMaker) {
//     console.log(id);
// }


// let ids = [...idMaker];

let [id1, id2, id3] = idMaker;

