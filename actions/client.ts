"use server"


import dbConnect from "../dbConnect/dbConnect";
import Client from "@/modals/User";
import {revalidatePath} from "next/cache";

export const createClient = async (formData : FormData) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000))

        await dbConnect() //connecting to the database
        //getting the data from the form
        const data = {
            name: formData.get('name'),
            mobile: formData.get('mobile'),
            address: formData.get('address'),
            serial: formData.get('serial'),

        }
        //saving the data to the database
        const saveClient = await new Client(data).save()
        console.log(saveClient)
        revalidatePath("/")



    } catch (error){
        console.log(error)

    }
}

export const showClients = async () => {
    try {
        await dbConnect()
        const clients = await Client.find().exec()
        console.log(clients)
        return clients
    } catch (error){
        console.log(error)
    }
}