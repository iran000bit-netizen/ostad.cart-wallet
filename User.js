const bcrypt = require('bcryptjs'); // استفاده از نسخه سبک

class User {
    constructor(userId, password, isAdmin = false) {
        this.userId = userId;
        this.passwordHash = bcrypt.hashSync(password, 10);
        this.isAdmin = isAdmin;
    }

    verifyPassword(password) {
        return bcrypt.compareSync(password, this.passwordHash);
    }
}

module.exports = User;
