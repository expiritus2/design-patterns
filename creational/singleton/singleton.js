class Counter {
    constructor() {
        if (!Counter.instance) {
            Counter.instance = this;
        }

        this.count = 0;

        return Counter.instance;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.count++;
    }
}
