import {Role} from "../Models/models.js"

const roleSeed = async () =>{
    try {
        await Role.bulkCreate([
            {name: "superadmin"},
            {name:"admin"},
            {name:"user"},
        ]);
    } catch (error) {
        console.log("🚀 ~ roleSeed ~ error:", error)
        
    }
}

await roleSeed()
//export {roleSeed};