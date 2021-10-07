const mongoose = require('../db/connection');

const activitySchema = new mongoose.Schema(
	{
		userName:{
			type: String,
			required: true
		},
		message:{
			type: String,
			required: true
		},
		image:{
			type:String,
			require: false
		}
	},
	{ timestamps: true }
);

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
