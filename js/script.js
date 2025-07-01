'use strict';


const findValuesByKey = (obj, targetKey) => {
    const result =[];

    function search(currentObj) {
        if (currentObj === null || typeof currentObj !== 'object') {
            return;
        }
        if (!Array.isArray(currentObj)) {
            for (const key in currentObj) {
                if (Object.prototype.hasOwnProperty.call(currentObj, key)) {
                    if (key === targetKey) {
                        result.push(currentObj[key]);
                    }
                    search(currentObj[key]);
                }
            }
        } else {
            for (const item of currentObj) {
                search(item);
            }
        }
    }
    search(obj);
    return result;
}

const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};

console.log(findValuesByKey(data, "id"));