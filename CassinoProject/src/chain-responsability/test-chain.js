class Handler {
    constructor() {
        this.successor = null;
    }

    setSuccessor(successor) {
        this.successor = successor;
    }

    handleRequest(request) {
        if (this.successor) {
            this.successor.handleRequest(request);
        } else {
            console.log('Nenhum handler pode lidar com a solicitação.');
        }
    }
}

class ConcreteHandler1 extends Handler {
    handleRequest(request) {
        if (request === 'type1') {
            console.log('ConcreteHandler1 lida com a solicitação.');
        } else {
            super.handleRequest(request);
        }
    }
}

class ConcreteHandler2 extends Handler {
    handleRequest(request) {
        if (request === 'type2') {
            console.log('ConcreteHandler2 lida com a solicitação.');
        } else {
            super.handleRequest(request);
        }
    }
}

class ConcreteHandler3 extends Handler {
    handleRequest(request) {
        if (request === 'type3') {
            console.log('ConcreteHandler3 lida com a solicitação.');
        } else {
            super.handleRequest(request);
        }
    }
}

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setSuccessor(handler2);
handler2.setSuccessor(handler3);

handler1.handleRequest('type2');
handler1.handleRequest('type4');