"use strict";

class HistoryTracker {
    constructor() {
        this.visited = [];
        window.addEventListener('popstate', (event) => {
            console.log('Popstate event:', event.state);
            console.log('Actual history:', this.visited);
        });
    }

    push(url) {
        this.visited.push(url);
        history.pushState({ url }, '', url);
        console.log(`Added: ${url}`);
    }
    back() {
        history.back();
    }
}

// Usage example
const tracker = new HistoryTracker();




