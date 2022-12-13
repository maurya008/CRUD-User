// Logic
const User = require("../model/userModel")

exports.home = (req, res) => {
    res.send("Hello Alpha")
};

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        //To check all the details
        if(!name || !email) {
            throw new Error("Name and Email are Required");   // new way instead of res.status
        }
        const userExists = await User.findOne({ email });
        if(userExists){
            throw new Error("Email already Exists");
        }
        //inserting into DB
        const user = await User.create({ name, email });
        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user,
        })
    } catch (error) {
        console.log(error)
    }

};

exports.getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users,
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}

exports.editUser =  async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "User Updated Successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message,
        })
        
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "User Updated Successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message,
        })
        
    }
}

// module.exports = { home };