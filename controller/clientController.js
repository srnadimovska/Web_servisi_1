const Client = require('../model/clientModel');

exports.createClient = async (req,res) => {
    try {

        const newClient = await Client.create(req.body);
         res.status(201).json({
            status:'success',
            data: {
                client: newClient,
            }
         })
    } catch(err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.getAllClients = async (req,res) => {
    try {
        const client = await Client.find();
        res.status(200).json({
            status:'success',
            data: {
                allClients: client,
            },
        });

    } catch(err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });

    }
};

exports.getClient = async (req,res) => {
    try {
        const clientId = req.params.id;
        const client = await Client.findById(clientId);

        res.status(200).json({
            status: 'success',
            data: {
                client: client,
            },
        
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });
    }
};

exports.updateClient = async(req,res) => {
    try {

        const clientId = req.params.id;
        const client = await Client.findByIdAndUpdate(clientId, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'success',
            data : {
                updatedclient: client,
            }
        });


    } catch(err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });

    }
};

exports.deleteClient = async (req,res) => {
    try {
        const clientId = req.params.id;
        const client = await Client.findByIdAndDelete(clientId);
        res.status(200).json({
            status:'success',
            data: {
                deletedclient: client,
            }
        });
    } catch(err) {
        res.status(500).json({
            status: 'fail',
            message: message.err,
        });
    }
};

