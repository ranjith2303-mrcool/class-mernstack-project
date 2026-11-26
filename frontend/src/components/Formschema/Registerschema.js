import z from "zod";
export const Registerschema = z.object({
    name:z.string().min(3,"Nmae must contain 3 letters"),
    email:z.string().email("enter a valid email"),
    password:z.string().min(8,"password must contain eight digits"),
    age:z.coerce.number().min(18,"Age should be minimum of 18")
})