import { connectToDatabase } from "../../../util/mongodb"

export default async function handler({query: {id}}, res){
    const {db} = await connectToDatabase()
    const projects = await db.collection("projects").find({}).toArray()
    
    const filtered = projects.filter(project => project._id.toString() === id)
    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }else{
        res.status(404).json({message: `Project with the id of ${id} is not found`})
    }
}
