const mongoose = require ('mongoose');
exports.db = async()=> {
    try {
        await mongoose.connect(
            'mongodb+srv://srnatrajkovska:wzXYdglZjoLNTUe2@cluster0.meqpy.mongodb.net/Company?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log('Connected to database');
    } catch(err) {
       console.log(err.message);
    }
};