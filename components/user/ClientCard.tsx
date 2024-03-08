import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
interface IProps {
    client : IClient
}
const ClientCard = ({client}:IProps) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{client.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{client.mobile}</p>
                    <p>{client.address}</p>
                    <p>{client.serial}</p>
                </CardContent>
                <CardFooter className={"flex flex-row gap-10"}>
                    <Button variant={"destructive"} size={"sm"}>Delete</Button>
                    <Button size={"sm"}>Edit</Button>
                </CardFooter>
            </Card>
        </>
    )
}
export default ClientCard;