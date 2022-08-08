// Next.js API route support: https://nextjs.org/docs/api-routes/introd
import conectarDB from "../../lib/db"
import user from "../../models/users"

 conectarDB()
 
export default async function handler(req, res) {

 switch (req.method) {
  case "GET":
    const users = await user.find();
    return  res.status(200).json(users)

 case "POST":
   const  newUser = new user(req.body);
   const saveUser = await newUser.save()
   return res.status(201).json(saveUser)

    default:
      return res.status(404).json({mes: 'no existe'})
 }
 
}
