'use client'

import React, { useState } from 'react'
import { Select, SelectSection, SelectItem, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, AutocompleteItem, Autocomplete, Input } from "@nextui-org/react";
import { zodResolver } from '@hookform/resolvers/zod';
import CustomModal from '@/components/modal';
import { z } from 'zod';
import { predictSchema } from '@/types/zodSchema';
import { useForm } from 'react-hook-form';
import { jobs, models, qualifications, work_type as work_types, roles, countries, genders } from '@/components/form/predictData';
import { axiosInstance } from '@/axiosInstance';
import { convertResult } from '@/utils/covertResult';


const PredictForm = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState<number>(0);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    const { handleSubmit, register, formState: { errors, isSubmitting, isDirty, isValid } } = useForm<z.infer<typeof predictSchema>>({
        resolver: zodResolver(predictSchema),
    })


    async function onsubmit(value: z.infer<typeof predictSchema>) {
        // console.log(data)
        try {
            const formData = new FormData();
            formData.append('Model', value.model);
            formData.append('Job Title', value.job);
            formData.append('Preference', value.gender);
            formData.append('Qualification', value.qualifications);
            formData.append('Work Type', value.work_type);
            formData.append('Country', value.country);
            const res = await axiosInstance.post('/predict', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            const data = res.data;
            setModalData(data.result)
            console.log(data.result)
            handleOpenModal()
        } catch (error) {
            console.log(error)
        }
        // await new Promise<void>((resolve) => {
        //     setTimeout(() => {
        //         resolve();
        //     }, 2000); // 2 seconds in milliseconds
        // });
    }



    return (
        <form method='POST' onSubmit={handleSubmit(onsubmit)}>
            <div className='py-10 flex w-full flex-wrap md:flex-shrink gap-6'>
                <Autocomplete
                    isRequired
                    {...register('model', { required: true })}
                    name='model'
                    label="Avaliable models"
                    placeholder="Select a model"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {models.map((model) => (
                        <AutocompleteItem key={model.value} value={model.value}>
                            {model.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    isRequired
                    {...register('job', { required: true })}
                    name='job'
                    label="Job title"
                    placeholder="Select a job title"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {jobs.map((job) => (
                        <AutocompleteItem key={job.value} value={job.value}>
                            {job.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    isRequired
                    {...register('gender', { required: true })}
                    name='gender'
                    label="Gender"
                    placeholder="Select your gender"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {genders.map((gender) => (
                        <AutocompleteItem key={gender.value} value={gender.value}>
                            {gender.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    isRequired
                    {...register('qualifications', { required: true })}
                    name='qualifications'
                    label="Qualifications"
                    placeholder="Select a qualifications"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {qualifications.map((qualification) => (
                        <AutocompleteItem key={qualification.value} value={qualification.value}>
                            {qualification.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    isRequired
                    {...register('work_type', { required: true })}
                    name='work_type'
                    label="Work Type"
                    placeholder="Select a work type"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {work_types.map((work_type) => (
                        <AutocompleteItem key={work_type.value} value={work_type.value}>
                            {work_type.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Autocomplete
                    isRequired
                    {...register('country', { required: true })}
                    name='country'
                    label="Country"
                    placeholder="Select your country"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {countries.map((country) => (
                        <AutocompleteItem key={country.value} value={country.value}>
                            {country.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                {/* <Autocomplete
                    isRequired
                    {...register('experience', { required: true })}
                    name='experience'
                    label="Experience"
                    placeholder="Select your work experience"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {models.map((model) => (
                        <AutocompleteItem key={model.value} value={model.value}>
                            {model.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete> */}
                {/* <Input
                    {...register('experience', { required: true })}
                    label="Experience"
                    type='number'
                    isRequired
                    placeholder="Enter your work experience"
                    labelPlacement="outside"
                    className="max-w-xs"
                /> */}
            </div>
            <div>
                <Button type='submit' color="primary" variant="solid" isLoading={isSubmitting}>
                    {isSubmitting ? 'Loading' : 'Submit your data'}
                </Button>
            </div>
            <CustomModal
                buttonLabel="Open Modal"
                title="Here are your results"
                content={
                    <>
                        <p>This is the estimate salary</p>
                        <p>{convertResult(modalData)}</p>
                    </>
                }
                // onCloseButtonLabel="Close Custom"
                onActionButtonLabel="Done"
                isOpen={isModalOpen}
                onOpen={handleOpenModal}
                onClose={handleCloseModal}
            />
        </form>
    )
}

export default PredictForm