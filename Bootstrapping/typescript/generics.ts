class Queue<T> {
    private data: T[] = [];
    add(item: T){
        this.data.push(item);
    }

    remove(item){
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('markus');
nameQueue.add('andrej');

const numberQueue = new Queue<number>();
numberQueue.add(10);