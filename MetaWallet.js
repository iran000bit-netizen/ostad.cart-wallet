class MetaWallet {
    constructor(userId) {
        this.userId = userId;
        this.wallets = {};
        this.cards = [];
        this.balance = {};
    }

    addWallet(chain, address, initialBalance = 0) {
        this.wallets[chain] = address;
        this.balance[chain] = initialBalance;
    }

    getBalance(chain) {
        return this.balance[chain] || 0;
    }

    updateBalance(chain, amount) {
        if (this.balance[chain] !== undefined) {
            this.balance[chain] += amount;
        }
    }

    addCard(card) {
        this.cards.push(card);
    }
}

module.exports = MetaWallet;
