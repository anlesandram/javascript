const moongose = require("mongoose")
const { encryptPassword } = require("../../utils/authentication")

const UserScheme = moongose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true }
})

UserScheme.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();
    try {
        this.password = encryptPassword(this.password)
        return next();
    } catch (err) {
        return next(err);
    }
});

exports.User = moongose.model("users", UserScheme);

