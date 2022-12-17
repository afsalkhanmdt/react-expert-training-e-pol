import Joi from "joi";

const JoiId = (Entity: string) =>
  Joi.string()
    .required()
    .messages({
      "string.base": `${Entity} id is required`,
      "any.required": `${Entity} id is required`,
      "string.empty": `${Entity} id is required`,
    });

const JoiRequiredId = (Entity: string) => JoiId(Entity).required();

const JoiName = (Entity: string = "Name") =>
  Joi.string()
    .regex(/^[a-zA-Z0-9_ \-]+$/)
    .min(3)
    .max(50)
    .messages({
      "string.base": `${Entity} must be a string`,
      "any.required": `${Entity} is required`,
      "string.empty": `${Entity} must not be empty`,
      "string.pattern.base": `Please enter a valid ${Entity}`,
      "string.min": `${Entity} must be at least 3 characters`,
      "string.max": `${Entity} must be at most 50 characters`,
    });

const JoiRequiredName = (Entity?: string) => JoiName(Entity).required();
const JoiItemName = (Entity: string = "Name") =>
  Joi.string()
    .max(50)
    .messages({
      "string.base": `${Entity} must be a string`,
      "any.required": `${Entity} is required`,
      "string.empty": `${Entity} must not be empty`,
      "string.max": `${Entity} must be at most 50 characters`,
    });
const JoiRequiredItemName = (Entity?: string) => JoiItemName(Entity).required();

const JoiPassword = (Entity: string = "Password") =>
  Joi.string()
  .min(6)
  .max(20)
  .messages({
    "string.base": `${Entity} must be a string`,
    "any.required": `${Entity} is required`,
    "string.empty": `${Entity} must not be empty`,
    "string.pattern.base": `${Entity} must be a valid name`,
    "string.min": `${Entity} must be at least 6 characters`,
    "string.max": `${Entity} must be at most 20 characters`,
  });
const JoiRequiredPassword = (Entity?: string) => JoiPassword(Entity).required();

const JoiPhone = (Entity = "Phone") =>
  Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .messages({
      "string.empty": `${Entity} cannot be empty`,
      "any.required": `${Entity} is required`,
      "string.length": `${Entity} must be 10 digit`,
      "string.pattern.base": `${Entity} must be number`,
      "string.base": `${Entity} must be a number`,
    });

const JoiRegisterNumber = (Entity = "RegisterNumber") => {
  Joi.string();
  // TODO to be declared
};

const JoiRequiredPhone = (Entity?: string) => JoiPhone(Entity).required();

const JoiRequiredRegisterNumber = (Entity?: string) =>
  Joi.string().optional().allow("");

const JoiAddress = (Entity = "Address") =>
  Joi.string().messages({
    "string.empty": `${Entity} cannot be empty`,
    "any.required": `${Entity} is required`,
  });

const JoiRequiredAddress = (Entity?: string) => JoiAddress(Entity).required();


const JoiEmail = (Entity: string = "Email") =>
  Joi.string()
    .email({ tlds: { allow: false } })
    // .allow("")
    .messages({
      "string.empty": `${Entity} cannot be empty`,
      "any.required": `${Entity} is required`,
      "string.email": `Please enter a valid ${Entity}`,
    });

const JoiRequiredEmail = (Entity?: string) => JoiEmail(Entity).required();


const JoiLocation = (Entity?: string) =>
  Joi.object()
    .keys({
      latitude: Joi.number().required().messages({
        "number.base": `Latitude must be a number`,
        "any.required": `Latitude is required`,
      }),
      longitude: Joi.number().required().messages({
        "number.base": `Longitude must be a number`,
        "any.required": `longitude is required`,
      }),
    })
    .required()
    .messages({
      "object.base": `${Entity} is Invalid`,
      "any.required": `${Entity} is Required`,
    });

const JoiRate = (Entity: string) =>
  Joi.number()
    .messages({
      "number.base": `${Entity} must be a number`,
      "any.required": `${Entity} is required`,
    })
    .required();
const JoiDuration = (Entity: string) =>
  Joi.number()
    .messages({
      "number.base": `${Entity} must be a number`,
      "any.required": `${Entity} is required`,
    })
    .required();

const JoiTime = (Entity: string) =>
  Joi.object()
    .keys({
      hours: Joi.number().required(),
      minutes: Joi.number().required(),
    })
    .messages({
      "object.base": `${Entity} is Invalid`,
      "object.required": `${Entity} is Required`,
      "any.required": `${Entity} is Required`,
    });

const JoiRequiredTime = (Entity: string) => JoiTime(Entity).required();


const JoiOtp = (Entity = "OTP") =>
  Joi.string()
    .length(6)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": `${Entity} cannot empty`,
      "any.required": `${Entity} is required`,
      "string.length": `${Entity} must be 6 digits`,
      "string.pattern.base": `${Entity} must be a number`,
    });

const JoiRequiredOtp = (Entity?: string) => JoiOtp(Entity).required();

const JoiFileUrl = (Entity: string = "File URL") =>
  Joi.string()

    .min(3)
    .max(50)
    .messages({
      "string.empty": `${Entity} cannot be empty`,
      "any.required": `${Entity} is required`,
    });
const JoiRequiredFileUrl = (Entity?: string) => JoiFileUrl(Entity).required();

const JoiFileUrls = (Entity: string = "File Urls"): Joi.ArraySchema =>
  Joi.array()
    .items(JoiFileUrl(Entity))
    .unique((a, b) => a === b)
    .messages({
      "array.includes": `${Entity}s is not a valid Input`,
      "array.include.RequiredUnknowns": `${Entity}s is not a valid Input`,
      "array.unique": `${Entity}s cannot be same`,
    });

const JoiDescription = (Entity = "Description") =>
  Joi.string()
    .allow("")
    .messages({
      "string.empty": `${Entity} cannot be empty`,
      "any.required": `${Entity} is required`,
    });

const JoiRequiredDescription = (Entity?: string) =>
  JoiDescription(Entity).required();

const JoiRequiredStringWithRange = (Entity:string,min=2,max=50)=>
    Joi.string()
    .required()
    .min(min)
    .max(max)
    .messages({
      "string.min": `${Entity} must be at least ${min} characters`,
      "string.max": `${Entity} must be at most ${max} characters`,
      "string.empty": `${Entity} cannot be empty`,
      "any.required": `${Entity} is required`,
    });

const JoiDate = (Entity = "Date") =>
  Joi.date().messages({
    "string.empty": `${Entity} cannot be empty`,
    "any.required": `${Entity} is required`,
    "date.base": `${Entity} is Invalid`,
  });

const JoiRequiredDate = (Entity?: string) => JoiDate(Entity).required();

export {
  JoiRequiredId,
  JoiName,
  JoiRequiredItemName,
  JoiRate,
  JoiTime,
  JoiRequiredEmail,
  JoiId,
  JoiEmail,
  JoiRequiredPassword,
  JoiDate,
  JoiRequiredDate,
  JoiDescription,
  JoiRequiredDescription,
  JoiRequiredName,
  JoiPhone,
  JoiAddress,
  JoiRequiredAddress,
  JoiRequiredPhone,
  JoiRequiredRegisterNumber,
  JoiOtp,
  JoiRequiredOtp,
  JoiLocation,
  JoiRequiredTime,
  JoiFileUrl,
  JoiRequiredFileUrl,
  JoiFileUrls,
  JoiDuration,
  JoiRequiredStringWithRange
};
