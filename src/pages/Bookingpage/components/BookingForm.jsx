import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";
import InputComponent from "../../../components/InputComponent";
import SelectComponent from "../../../components/SelectComponent";

export default function BookingForm() {

    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const navigate = useNavigate();

    //useOutletContext will have the props passed form parent component.
    //And due to using react hook form is not neccesary to use a reducer to handle that changes.
    const [availableTimes] = useOutletContext();

    useState(() => {
        //Script to fetch data is not working
        //<script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
    }, []);

    //into this handle change will be the get to the endpoint script that is not working.
    const handleChange = () => {
        //console.log(getValues('reservationDate'));
    };

    const onSubmit = (data) => {
        //Due to script is not working, is not possible to send form data, so show the user that it went well.
        Swal.fire('Good job', 'Your reservation is done', 'success');
        navigate('../confirmed');
    };

    return (
        <>
            <h1>Make a reservation</h1>
            <section>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="inputs-container">
                        <InputComponent handleChange={handleChange} type="date" name="reservationDate" label="Choose date" register={register} errors={errors} required={true} />
                        <SelectComponent name="reservationTime" label="Choose time" options={availableTimes} register={register} errors={errors} required={true} />
                        <InputComponent validGuestNumbers={true} type="number" name="guestsNumber" label="Number of guests" min="1" max="10" placeholder="Write number of guests" register={register} errors={errors} required={true} />
                        <SelectComponent name="ocassion" label="Ocasion" options={[{ value: 'Birthday', text: 'Birthday' }, { value: 'Anniversary', text: 'Anniversary' }]} register={register} errors={errors} required={true} />
                    </div>
                    <button type="submit">Book reservation</button>
                </form>
            </section>
        </>
    );
}