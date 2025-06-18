import { Header } from "@/components/Layout/Header";
import { Notifications } from "@/components/Layout/Notifications";

const NotificationsPage = async () => {
  return (
    <>
      <Header label="Notifications" showBack />
      <Notifications />
    </>
  );
};

export default NotificationsPage;
