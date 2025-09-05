async function multiChainPayment(wallet, amount, chainsPriority) {
    let remaining = amount;

    for (let chain of chainsPriority) {
        let balance = wallet.getBalance(chain);
        if (balance >= remaining) {
            wallet.updateBalance(chain, -remaining);
            return true;
        } else if (balance > 0) {
            wallet.updateBalance(chain, -balance);
            remaining -= balance;
        }
    }
    return false;
}

module.exports = { multiChainPayment };
