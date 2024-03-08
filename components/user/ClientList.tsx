import {showClients} from "@/actions/client";
import ClientCard from "@/components/user/ClientCard";

const ClientList = async () => {

    const clients = await showClients()
    console.log(clients)
    return (
        <>
            {
                clients && clients.map((client: IClient, index: number) =>

                <div key={index} className={"flex flex-col pt-5 w-96"}>
                    <ClientCard client={client} key={index}></ClientCard>
                </div>

                )
            }



        </>
    )

}

export default ClientList;