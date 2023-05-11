import { Layout, Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/Chat";

function Home() {
  return (
    <Page className="flex flex-col gap-12 bg-orange-100 min-h-screen min-w-full px-6 items-center">
      <section className="flex flex-col gap-6 lg:w-1/2">
        <Text className="text-slate-900" variant="h1"> 🧑‍⚕️ Doctorly</Text>
        <Text className="text-slate-900">
          This is Doctorly, a health AI Assistant. It will help you with simple health related queries.
        </Text>
      </section>

      <section className="flex flex-col lg:w-1/2 gap-3">
        <div className="">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

Home.Layout = Layout;

export default Home;
