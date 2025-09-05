const userProfiles = {};

function recordTransaction(userId, amount) {
    if (!userProfiles[userId]) {
        userProfiles[userId] = { averageAmount: amount, transactions: 1 };
    } else {
        const profile = userProfiles[userId];
        profile.averageAmount = ((profile.averageAmount * profile.transactions) + amount) / (profile.transactions + 1);
        profile.transactions += 1;
    }
}

function isSuspicious(userId, amount) {
    const profile = userProfiles[userId];
    if (!profile) return false;

    if (amount > profile.averageAmount * 3) return true;

    return false;
}

module.exports = { recordTransaction, isSuspicious };
