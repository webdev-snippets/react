"use client"
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from '@/components/textInput';
import { useState } from 'react';

const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8)
  })

export default function Login() {
    const [usernameValue, setUsernameValue] = useState("")

    const { register, handleSubmit, formState: {errors}} = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email:"",
            password: ""
        }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    return(
        
    )
}