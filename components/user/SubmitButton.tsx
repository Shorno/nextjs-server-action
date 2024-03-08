"use client"
import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom";
import {Spinner} from "@nextui-org/react";

const SubmitButton = () => {
    const {pending} = useFormStatus()


    return (
        <Button type={"submit"}>{pending ? <Spinner color={"white"} size={"sm"}/> : "Create"}</Button>
    )
}
export default SubmitButton;