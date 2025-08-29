"use strict";

function createBus() {
    const topics = Object.create(null); // { [topic]: Set<Function> }

    function on(topic, handler) {
        if (!topics[topic]) {
            topics[topic] = new Set();
        }
        topics[topic].add(handler);

        // We are bringing back the unsubscribe feature
        return function unsubscribe() {
            off(topic, handler);
        };
    }

    function off(topic, handler) {
        const subs = topics[topic];
        if (!subs) return;
        subs.delete(handler);
        if (subs.size === 0) {
            delete topics[topic];
        }
    }

    function emit(topic, payload, delay = 0) {
        if (!topics[topic]) return;

        // We create a “snapshot” of subscribers at the time of the call
        const handlers = Array.from(topics[topic]);

        setTimeout(() => {
            for (const handler of handlers) {
                // The handler may have already been unsubscribed, let's check.
                if (topics[topic] && topics[topic].has(handler)) {
                    try {
                        handler(payload);
                    } catch (e) {
                        console.error("Handler error:", e);
                    }
                }
            }
        }, delay);
    }

    return { on, off, emit };
}
1. Basic asynchrony
const bus = createBus();
bus.on('tick', (x) => console.log('tick:', x));

bus.emit('tick', { step: 1 }, 0);
console.log('after schedule');

//Expected order in the console:
    after schedule
tick: { step: 1 }

2. Chain of events
const bus = createBus();
bus.on('tick', (x) => {
    console.log('handler step:', x.step);
    if (x.step === 1) {
        bus.emit('tick', { step: 2 }, 0);
    }
});

bus.emit('tick', { step: 1 }, 0);

//Result:
//handler step: 1
//handler step: 2
//Explanation: The second emit also goes into the next tick, so it executes after the first call completes.

3. Відписка
const bus = createBus();
const off = bus.on('news', (x) => {
    console.log('news:', x);
    off(); // відписка після першого
});

bus.emit('news', 'A', 0);
bus.emit('news', 'B', 0);

//in console:
//news: A

4. Several subscribers and a guarantee that each one will be called
const bus = createBus();
bus.on('ev', (v) => console.log('h1', v));
bus.on('ev', (v) => console.log('h2', v));
bus.on('ev', (v) => console.log('h3', v));

bus.emit('ev', 42, 0);

//In the console (the order may be h1–h2–h3):
h1 42
h2 42
h3 42


