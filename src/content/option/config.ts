import { defineCollection, z } from "astro:content";
// z => zod schema



const option = defineCollection({
    schema: z.object({
        title: z.string(),

    })

})



export const collections = { option }; 