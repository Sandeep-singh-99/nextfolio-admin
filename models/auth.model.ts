import { model, models, Schema } from "mongoose";

interface IAuth {
    username: string,
    password: string,
}

const authSchema = new Schema<IAuth>({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Auth = models.Auth || model<IAuth>("Auth", authSchema);

export default Auth;