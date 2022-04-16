import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-яіІїЇёЁ]{1,20}$/).required().messages({
        'string.pattern.base': "Тільки букви, мінімум 1 символ, максимум 20"
    }),
    // // model: Joi.string().min(2).max(20).required().messages({
    //
    //     'string.empty': "Model не може бути пустим",
    //     'string.min': "Model має бути мінімум 2 символи"
    // }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.empty': "Price не може бути пустим"
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {carValidator}
