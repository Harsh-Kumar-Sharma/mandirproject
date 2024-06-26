/* eslint-disable */
class Queue {
    constructor() {
        this.data = [];
        this.rear = 0;
        this.size = 200000;
    }

    enqueue (element) {
        if (this.rear < this.size) {
            this.data[this.rear] = element;
            this.rear += 1;
        }
    }

    length () {
        return this.rear;
    }

    isEmpty () {
        return this.rear === 0;
    }

    getFront () {
        if (this.isEmpty() === false) {
            return this.data[0];
        }
    }

    getLast () {
        if (this.isEmpty() === false) {
            return this.data[this.rear - 1];
        }
    }

    dequeue () {
        if (this.isEmpty() === false) {
            this.rear -= 1;
            return this.data.shift();
        }
    }

    clear () {
        this.data.length = 0;
        this.rear = 0;
    }
}

module.exports = {
    notificationsQueue: new Queue(),
};
