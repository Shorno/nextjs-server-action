import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {createClient} from "@/actions/client";

const NewClientForm = () => {
    return (
        <div>
            <form action={createClient} className={"flex flex-col gap-5 border p-5 shadow-lg w-96 rounded-md"}>
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
                <Button type={"submit"}>Submit</Button>
            </form>
        </div>
    )
}
export default NewClientForm;