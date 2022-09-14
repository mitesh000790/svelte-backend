const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
    // email field
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    //   password field
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },

    //  first name field
    firstName:{
        type:String,
        required:true
    },

    // last name field
    lastName:{
        type:String,
        required:true
    },
});

// export UserSchema
module.exports = mongoose.model("SvelteUsers", UserSchema);
