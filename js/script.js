"use strict";

class URLParser {
    constructor(fullUrl) {
        this.url = new URL(fullUrl);
    }

    get protocol() {
        return this.url.protocol;
    }

    get hostname() {
        return this.url.hostname;
    }

    get path() {
        return this.url.pathname;
    }

    get queryParams() {
        const params = {};
        for (const [key, value] of this.url.searchParams) {
            params[key] = value;
        }
        return params;
    }
}

// Example to use
const parser = new URLParser("https://example.com/products/item?search=book&page=2");

console.log(parser.protocol);    // "https:"
console.log(parser.hostname);    // "example.com"
console.log(parser.path);        // "/products/item"
console.log(parser.queryParams); // { search: "book", page: "2" }





