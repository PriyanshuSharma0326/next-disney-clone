'use client';

import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
    input: z.string().min(2).max(100),
});

function SearchInput() {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: '',
        },
    });

    function onSubmit(values) {
        router.push(`/search/${values.input}`);
        form.reset();
    }

    return (
        <Form { ...form }>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField 
                    control={form.control} 
                    name='input' 
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder='Search...' { ...field } />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}

export default SearchInput;
