import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_HOST_URL: z.string(),
});


export let envClientSchema = envSchema.parse(process.env);
