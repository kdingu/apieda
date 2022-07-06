import React from 'react';
import HeadingText from "../heading-text";
import ContactFrom from "./contact-form";
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const generalFormClasses = `bg-black rounded-xl p-3`
    const inputClasses = `text-white border border-gray-400`
    const textareaClasses = `text-white border border-gray-400 col-span-2`
    const buttonClasses = `mt-8 bg-green text-black col-span-2`

    return (
        <div className={`relative`}>
            <HeadingText text={'Discuss with us.'} />
            <form className={`bg-white bg-opacity-10 grid grid-cols-2 p-10 gap-3 rounded-xl`} onSubmit={handleSubmit(onSubmit)}>
                <input className={`${generalFormClasses} ${inputClasses} ${errors['firstname'] ? 'border-4 border-red-600' : ''}`} type="text" placeholder="First Name" {...register("firstname", {required: true})} />
                <input className={`${generalFormClasses} ${inputClasses} ${errors['lastname'] ? 'border-4 border-red-600' : ''}`} type="text" placeholder="Last Name" {...register("lastname", {required: true})} />
                <input className={`${generalFormClasses} ${inputClasses} ${errors['email'] ? 'border-4 border-red-600' : ''}`} type="email" placeholder="Email" {...register("email", {required: true})} />
                <input className={`${generalFormClasses} ${inputClasses} ${errors['mobile'] ? 'border-4 border-red-600' : ''}`} type="tel" placeholder="Mobile" {...register("mobile", {})} />
                <input className={`${generalFormClasses} ${inputClasses} ${errors['company'] ? 'border-4 border-red-600' : ''} col-span-2`} type="text" placeholder="Company" {...register("company", {})} />
                <textarea rows={8} placeholder={'Message'} className={`${generalFormClasses} ${textareaClasses} ${errors['message'] ? 'border-4 border-red-600' : ''}`} {...register("message", {required: true})} />
                <input className={`${generalFormClasses} ${buttonClasses}`} type="submit" role={'button'} />
            </form>
            <img className={'absolute -top-10 opacity-20 right-0'} alt={'logo'} src={'http://localhost:3000/logo/apieda_mini_logo_mini.svg'} />
        </div>
    );
};

export default Contact;
