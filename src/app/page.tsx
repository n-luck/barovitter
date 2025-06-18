import { Form } from "@/components/Form";
import { Feed } from "@/components/Layout/Feed";
import { Header } from "@/components/Layout/Header";

export default function Home() {
  return (
    <>
      <Header label="Barovia" showBack={false} />
      <Form placeholder="What's happening?" />
      <Feed />
    </>
  );
}
