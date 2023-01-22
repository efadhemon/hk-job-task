import User from "./user.model";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import userService from "./user.service";
import { authValidation } from "../auth/auth.validator";
import { responseData } from "../../shared/utils/responseData";

const userController = {
    create: async (req: Request, res: Response) => {
        // before registration data validation
        const { error } = authValidation({
            phone: req.body.phone,
            password: req.body.password,
        });
        if (error) return res.send({ message: error.details[0].message });

        // checking if the user already in database
        const phoneExist = await User.findOne({ phone: req.body.phone });
        if (phoneExist)
            return res.send({ message: "Phone Number is already exits" });

        const emailExist = await User.findOne({ phone: req.body.email });
        if (emailExist) return res.send({ message: "Email is already exits" });

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = {
            ...req.body,
            password: hashPassword,
        };

        const createdUser = await userService.create(newUser);
        return res.status(200).send(responseData(createdUser, req));
    },
    get: async (req: Request, res: Response) => {
        const users = await userService.get();
        return res.send(responseData(users, req));
    },
    getById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const user = await userService.getById(id);
        return res.send(responseData(user, req));
    },
    updateById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const updatedUser = await userService.updateById(id, req.body);
        return res.send(responseData(updatedUser, req));
    },
    deleteById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const deletedUser = await userService.deleteById(id);
        return res.send(responseData(deletedUser, req));
    },
};

export default userController;
