import {connect} from 'mongoose'

export const connectToDatabase = async () => {
    await connect ('mongodb+srv://Melicia:<db_password>@cluster0.b6187mw.mongodb.net/?appName=Cluster0')
}