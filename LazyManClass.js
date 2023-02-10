class LazyMan {
    constructor(name) {
        this.name = name;
        this.queue = [];
        setTimeout(() => {
            this.next();
        }, 0);
    }

    sleep(time) {
        const fn = () => {
            setTimeout(() => {
                console.log('===============sleep=====================');
                this.next();
            }, time);

        }
        this.queue.push(fn);
        return this;
    }

    eat(food) {
        const fn = () => {
            setTimeout(() => {
                console.log('===============food=====================');
                this.next();
            }, 0);
        }
        this.queue.push(fn);
        return this;
    }

    sleepFirst(time) {
        const fn = () => {
            setTimeout(() => {
                console.log('===============sleepFirst=====================');
                this.next();
            }, time);
        }
        this.queue.unshift(fn);
        return this;
    }

    next() {
        const fn = this.queue.shift();
        fn && fn();
    }
}

new LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food ');