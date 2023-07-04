import Joi from "joi";

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .pattern(/^[a-zA-Z]/)
    .min(3)
    .max(10)
    .required()
    .messages({
      'string.pattern.base': 'username must not start with digits'
    }),

  password: Joi.string()
    .alphanum()
    .min(8)
    .max(30)
    .pattern(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/)
    .required()
    .messages({
      'string.pattern.base': 'password must contain uppercase and lowercase letters, as well as numbers'
    }),

  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'passwords don\'t match'
    })
})

export default async function validation(formData) {
  try {
    await schema.validateAsync(formData, {
      errors: {
        wrap: {
          label: false
        }
      }
    })
  } catch (error) {
    throw new Error(error.message)
  }
}