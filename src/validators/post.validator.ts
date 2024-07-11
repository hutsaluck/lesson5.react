import Joi from "joi";

const postValidator =
    Joi.object({
        title: Joi.string()
            .pattern(/\b[a-zA-Z]{3,}\b/)
            .error(errors => {
                errors.forEach(error => {
                    switch (error.code) {
                        case 'string.empty':
                            error.message = 'cannot be empty';
                            break;
                        case 'string.min':
                            error.message = 'cannot be empty lower than 3';
                            break;
                        default:
                            break;
                    }
                })
                return errors;
            }),
        body: Joi.string()
            .pattern(/\b[a-zA-Z]{3,}\b/)
            .error(errors => {
                errors.forEach(error => {
                    switch (error.code) {
                        case 'string.empty':
                            error.message = 'cannot be empty';
                            break;
                        case 'string.min':
                            error.message = 'cannot be empty lower than 3';
                            break;
                        default:
                            break;
                    }
                })
                return errors;
            }),
        userId: Joi.number()
            .min(1)
            .required()
            .messages({
                "number.min": "min userId is 1",
            })
    })

export default postValidator;