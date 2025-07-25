import { useEffect, useState } from "react";
import { validator } from "../utils/validator";

const useForm = (initialState = {}, onSubmit) => {
    const [form, setForm] = useState(initialState);

    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setForm((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        prodNum: {
            isRequired: { message: "Поле должено начинаться с числа" },
            isNumber: { message: "Поле должно содержать только цифры" }
        },
        price: {
            isRequired: { message: "Поле обязателено для заполнения" },
            isCount: { message: "Поле должно содержать только цифры" }
        },
        count: {
            isRequired: { message: "Поле обязателено для заполнения" },
            isNumber: { message: "Поле должно содержать только цифры" }
        }
    };

    useEffect(() => {
        validate();
    }, [form]);

    const validate = () => {
        const errors = validator(form, validatorConfig);

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(form);
    };

    return { form, isValid, handleChange, handleSubmit };
};

export default useForm;
