"use client"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {createClient} from "@/actions/client";
import SubmitButton from "@/components/user/SubmitButton";
import toast from "react-hot-toast";
import {useRef} from "react";


const NewClientForm = () => {
    const ref = useRef<HTMLFormElement>(null)


    return (
        <div>
            <form ref={ref} action={async (formData: FormData) => {
                const response = await createClient(formData)
                if (response?.error) {
                    toast.error(response.error)
                } else {
                    toast.success("Client created successfully")
                    ref.current?.reset()
                }
            }} className={"flex flex-col gap-5 border p-5 shadow-lg w-96 rounded-md"}>
                <Label htmlFor={"name"}>Name</Label>
                <Input
                    type={"text"}
                    name={"name"}
                    placeholder={"Name"}
                    required
                />
                <Label htmlFor={"mobile"}>Mobile</Label>
                <Input
                    type={"text"}
                    name={"mobile"}
                    placeholder={"Mobile"}
                    required
                />
                <Label htmlFor={"address"}>Address</Label>
                <Input
                    type={"text"}
                    name={"address"}
                    placeholder={"Address"}
                    required
                />
                <Label htmlFor={"serial"}>Serial No</Label>
                <Input
                    type={"text"}
                    name={"serial"}
                    placeholder={"Serial"}
                    required
                />
                <SubmitButton></SubmitButton>
            </form>
        </div>
    )
}
export default NewClientForm;