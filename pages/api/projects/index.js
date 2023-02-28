import { connectToDatabase } from "../../../util/mongodb"

export default async function handler(req, res){
    const {client, db} = await connectToDatabase()
    const projects = await db.collection("projects").find({}).toArray()
 
    res.status(200).json(projects)
}