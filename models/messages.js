module.exports = (sequelize, DataTypes) => {
	var Messages = sequelize.define('Messages', {
		text: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		date_to_send: DataTypes.DATE,
		time_to_Send: DataTypes.TIME
	});

	Messages.associate = function(models) {
		Messages.belongsToMany(models.Contacts, {through: 'contacts_and_messages'});
		Messages.belongsTo(models.User);
	};
	return Messages;
};

// FOR FUTURE REFERENCE: 
// {
//   createdAt: {
//     [Op.lt]: new Date(),
//     [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
//   }
// }
// createdAt < [timestamp] AND createdAt > [timestamp]