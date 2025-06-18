import React from "react";

import { User } from "@/components/Layout/UserProfile";

const UserPage = async ({ params }: { params: { userId: string } }) => {
  const { userId } = await params;

  return (
    <>
      <User userId={userId} />
    </>
  );
};

export default UserPage;
