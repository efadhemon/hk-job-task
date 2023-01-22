import Joi from "joi";
import { BD_PHONE_NUMBER_PATTERN } from "../../shared/utils/regex";

export const authValidation = (data: any) => {
  const schema = Joi.object({
    phone: Joi.string()
      .pattern(new RegExp(BD_PHONE_NUMBER_PATTERN))
      .message(`${data.phone} is not a valid phone number`),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};
