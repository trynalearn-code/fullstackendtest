import { createUserService } from "../services/userService.js"

export async function createUserController(req, res){
    try {
        const result = await createUserService(req.body)
        return res.status(200).json({
            success:true,
            data:result
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            success:false,
            error: "There was an error creating your user"
        })
    }
}