/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useNotifications from "@/hooks/useNotifications";

import { GiVampireCape } from "react-icons/gi";

import { NotifcationEmpty, NotifcationWrapper, Notification } from "./Notifications.style";

export const Notifications = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return (
      <NotifcationEmpty>
        <p>No new notifications</p>
      </NotifcationEmpty>
    );
  }

  return (
    <NotifcationWrapper>
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <Notification key={notification.id}>
          <GiVampireCape size={32} /> <p>{notification.body}</p>
        </Notification>
      ))}
    </NotifcationWrapper>
  );
};
