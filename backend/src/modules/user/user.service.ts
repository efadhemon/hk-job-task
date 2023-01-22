import IUser from "./user.interface";
import User from "./user.model";

const userService = {
    create: async (user: IUser) => {
        return User.create(user);
    },
    get: async () => {
        return User.find({});
    },
    getById: async (id: string) => {
        return User.findById(id);
    },
    updateById: async (id: string, data: any) => {
        return User.findByIdAndUpdate(id, data, { new: true });
    },
    deleteById: async (id: string) => {
        return User.findByIdAndDelete(id);
    },
};

export default userService;
