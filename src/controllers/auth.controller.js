const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


async function registerUser(req, res) {
 
    const { username, email, password, role } = req.body;
    const user = new userModel({ username, email, password, role });
    const userAlreadyExists = await userModel.findOne({ 
        $or:[
            {username},
            {email}
        ]
     });
    if (userAlreadyExists) {
        return res.status(400).json({ message: 'User already exists' });
    }


    const user = await userModel.create({ username, email, password, role }); 
    
    
    const token = jwt.sign({ id: user._id, role : user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token }); 
    
    res.cookie('token',token)
    res.status(201).json({ message: 'User registered successfully', 
        user:{
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
     });

    
}