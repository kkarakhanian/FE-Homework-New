"use strict";

//Task 1
function groupByCategory(items) {
    const map = new Map();

    for (const item of items) {
        const category = item.category;
        if (!map.has(category)) {
            map.set(category, []);
        }
        map.get(category).push(item);
    }

    return map;
}

// example of usage
const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone', category: electronics },
    { name: 'Book A', category: books },
];

const result = groupByCategory(items);
console.log(result);

//Task 2
function filterUniqueByReference(arr) {
    const seen = new Set();
    const result = [];

    for (const item of arr) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    return result;
}

// Example
const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];
const result2 = filterUniqueByReference(input);
console.log(result2); // [obj1, obj2]

//Task 3
function createMetadataStorage() {
    const storage = new WeakMap();

    return {
        setMetadata(obj, metadata) {
            storage.set(obj, metadata);
        },
        getMetadata(obj) {
            return storage.get(obj);
        },
        hasMetadata(obj) {
            return storage.has(obj);
        }
    };
}

// Example
const storage = createMetadataStorage();

const user1 = { name: "Anna" };
const user2 = { name: "Oleh" };

storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });

console.log(storage.getMetadata(user1)); // { role: "admin" }
console.log(storage.hasMetadata(user2)); // true

//Task 4
class ObjectTracker {
    constructor() {
        this.processed = new WeakSet();
    }

    mark(obj) {
        this.processed.add(obj);
    }

    wasProcessed(obj) {
        return this.processed.has(obj);
    }
}

// Example
const tracker = new ObjectTracker();

const obj = { name: "A" };

console.log(tracker.wasProcessed(obj)); // false
tracker.mark(obj);
console.log(tracker.wasProcessed(obj)); // true



