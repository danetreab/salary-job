'use client'

import React, { useState } from 'react'
import { Select, SelectSection, SelectItem, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, AutocompleteItem, Autocomplete, Input } from "@nextui-org/react";
import { zodResolver } from '@hookform/resolvers/zod';
import CustomModal from '@/components/modal';
import { z } from 'zod';
import { predictSchema } from '@/types/zodSchema';
import { useForm } from 'react-hook-form';
import { jobs, models, qualifications, work_type as work_types, roles, countries } from '@/components/form/predictData';


const PredictForm = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    const { handleSubmit, register, formState: { errors, isSubmitting, isDirty, isValid } } = useForm<z.infer<typeof predictSchema>>({
        resolver: zodResolver(predictSchema),
    })


    async function onsubmit(data: z.infer<typeof predictSchema>) {
        console.log(data)
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000); // 2 seconds in milliseconds
        });
        handleOpenModal()
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
                {/* <Autocomplete
                    isRequired
                    {...register('role', { required: true })}
                    name='role'
                    label="Role"
                    placeholder="Select a role"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {roles.map((role) => (
                        <AutocompleteItem key={role.value} value={role.value}>
                            {role.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete> */}
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
                title="Custom Modal Title"
                content={
                    <>
                        <p>This is a custom modal content.</p>
                        <p>You can add more paragraphs or customize as needed.</p>
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