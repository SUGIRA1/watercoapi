import Premises from "../models/premise.js";


//Add a Premise
export async function addPremise(req, res) {
    try {
        // let premiseExists = await Premises.findAll({where: {MeterNo: req.body.MeterNo}});
        // if (premiseExists) {
        //     res.status(500).json({
        //     success: false,
        //     message: "Oopss! Meter NO already exists already exists..."
        //     });
        // } else {
            let premise = await Premises.create(req.body);
            if (premise) {
                res.status(200).json({
                    success: true,
                    message: 'Premise created successfully',
                    data: premise
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Premise could not be created at this time'
                })
            }
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a premise
export async function viewPremise(req, res) {
    try {
        let onepremise = await Premises.findAll({where: {PremiseId: req.params.id}});
        if (onepremise) {
            res.json({
                success: true,
                message: 'Premise records retrieved successfully',
                data: onepremise
            })
        } else {
            res.json({
                success: true,
                message: 'No Premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all premises
export async function viewAllPremises(req, res) {
    try {
        let allpremises = await Premises.findAll();
        if (allpremises) {
            res.json({
                success: true,
                message: 'Premise records retrieved successfully',
                data: allpremises
            })
        } else {
            res.json({
                success: true,
                message: 'No Premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View Member premises
export async function viewPremisesByMember(req, res) {
    try {
        let onepremise = await Premises.findAll({where: {Customerid: req.params.id}});
        if (onepremise) {
            res.json({
                success: true,
                message: 'Premise records retrieved successfully',
                data: onepremise
            })
        } else {
            res.json({
                success: true,
                message: 'No Premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View Premises by route
export async function viewPremisesByRoute(req, res) {
    try {
        let onepremise = await Premises.findAll({where: {Routeid: req.params.id}});
        if (onepremise) {
            res.json({
                success: true,
                message: 'Premise records retrieved successfully',
                data: onepremise
            })
        } else {
            res.json({
                success: true,
                message: 'No Premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update premise records
export async function updatePremise(req, res) {
    try {
        
        let updatedpremise = await Premises.update(req.body,{where:{PremiseId: req.params.id}});
        if (updatedpremise) {
            res.json({
                success: true,
                message: 'Premise records updated successfully',
                data: updatedpremise
            })
        } else {
            res.json({
                success: true,
                message: 'No Premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}


