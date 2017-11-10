const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: true,
					notEmpty: true
				}
			},
			password_hashed: DataTypes.STRING, // stores hashed password in the DB
			password: DataTypes.VIRTUAL, // this is virtual, not actually stored in DB
			status: DataTypes.BOOLEAN,
		}, { 
		// these are optional 
			indexes: [
				{fields: ['email'],
				unique: true}
			],
			hooks: {
				beforeCreate: setEmailAndPassword,
				beforeUpdate: setEmailAndPassword,
			},
			defaultScope: {
				attributes: {exclude: ['password_digest']}
			}
		}
	);

	User.associate = function(models) {
		User.hasMany(models.Contacts);
		User.hasMany(models.Messages);
	}

	User.prototype.authenticate = function(plaintext) {
		return bcrypt.compare(plaintext, this.password_hashed)
	}
	return User;
}

function setEmailAndPassword(user) {
	user.email = user.email && user.email.toLowerCase();
	if (!user.password) return Promise.resolve(user)

	return bcrypt.hash(user.get('password'), 10)
	.then(hash => {
		user.set('password_hashed', hash)
	})

}