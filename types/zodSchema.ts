import z from "zod";

export const predictSchema = z.object({
    model: z.string(),
    job: z.string(),
    qualifications: z.string(),
    work_type: z.string(),
    // experience: z.string(),
    // role: z.string(),
    country: z.string(),
    gender: z.string(),
});
