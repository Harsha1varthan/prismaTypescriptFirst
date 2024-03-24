import zod from "zod"

export const userSchema = zod.object({
    name: zod.string().email(),
    password: zod.string()
})

export const todoSchema = zod.object({
    title: zod.string(),
    done: zod.boolean(),
    description: zod.string()
})