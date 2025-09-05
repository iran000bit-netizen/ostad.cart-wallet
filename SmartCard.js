class SmartGiftCard {
    constructor(cardId, expirationDate, spendingLimit) {
        this.cardId = cardId;
        this.expirationDate = new Date(expirationDate);
        this.spendingLimit = spendingLimit;
        this.usedAmount = 0;
    }

    isValid() {
        return new Date() < this.expirationDate;
    }

    canSpend(amount) {
        return (this.usedAmount + amount) <= this.spendingLimit;
    }

    spend(amount) {
        if (this.canSpend(amount)) {
            this.usedAmount += amount;
            return true;
        }
        return false;
    }
}

module.exports = SmartGiftCard;
