const { User } = require("../models/models")

class ServiceUser {

    async create() {

        const user = new User()
        user.name = "Samuel"
        user.funnyname = "Samuca"
        const newUser = await user.save()
        console.log(newUser);
    }


    somenthing() {
        console.log("something ....");
    }
}


module.exports = ServiceUser