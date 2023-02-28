import { connectToDatabase } from "../../util/mongodb"

export default async function handler(req, res){
    const {db} = await connectToDatabase()
    const aboutMe = await db.collection("aboutMe").find({}).toArray()

    res.status(200).json(aboutMe)
}