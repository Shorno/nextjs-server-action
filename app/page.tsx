import NewClientForm from "@/components/user/newClientForm";
import ClientList from "@/components/user/ClientList";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewClientForm></NewClientForm>
        <ClientList></ClientList>
    </main>
  );
}
