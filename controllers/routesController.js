import Routes from "../models/route.js";


//Add a route
export async function addRoute(req, res) {
    try {
        // let routeExists = await Routes.findAll({where: {Route_name: req.body.Route_name}});
        // if (routeExists) {
        //     res.status(500).json({
        //     success: false,
        //     message: "Oopss! The route name already exists..."
        //     });
        // } else {
            let route = await Routes.create(req.body);
            if (route) {
                res.status(200).json({
                    success: true,
                    message: 'Route created successfully',
                    data: route
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Route could not be created at this time'
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

//View a route
export async function viewRoute(req, res) {
    try {
        let oneroute = await Routes.findAll({where: {Routeid: req.params.id}});
        if (oneroute) {
            res.json({
                success: true,
                message: 'Route records retrieved successfully',
                data: oneroute
            })
        } else {
            res.json({
                success: true,
                message: 'No route records found.',
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

//View all Routes
export async function viewAllRoutes(req, res) {
    try {
        let allRoutes = await Routes.findAll();
        if (allRoutes) {
            res.json({
                success: true,
                message: 'Route records retrieved successfully',
                data: allRoutes
            })
        } else {
            res.json({
                success: true,
                message: 'No route records found.',
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

//Update route records
export async function updateRoute(req, res) {
    try {
        
        let updatedroute = await Routes.update(req.body,{where:{Routeid: req.params.id}});
        if (updatedroute) {
            res.json({
                success: true,
                message: 'Route records updated successfully',
                data: updatedroute
            })
        } else {
            res.json({
                success: true,
                message: 'No route records found.',
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