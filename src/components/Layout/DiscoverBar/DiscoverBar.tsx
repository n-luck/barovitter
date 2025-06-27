"use client";

import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import useUsers from "@/hooks/useUsers";
import { Avatar } from "@/components/UI/Avatar";

import {
  DiscoverbarHeadline,
  DiscoverbarLine,
  DiscoverbarWrapper,
  FollowWrapper,
  UserInfo,
  UserWrapper,
} from "./DiscoverBar.style";
import { DiscoverBarFooter } from "./DiscoverBarFooter";
import { LoadingCircle } from "@/components/UI/LoadingCircle";
import { LinkItem as Link } from "@/components/UI/Link";

export const DiscoverBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) return null;

  return (
    <DiscoverbarWrapper>
      <DiscoverbarHeadline>Next game:</DiscoverbarHeadline>
      <p style={{ marginTop: "0.5rem" }}>¯\_(ツ)_/¯</p>
      <DiscoverbarLine />
      <DiscoverbarHeadline>Follow these adventurers</DiscoverbarHeadline>
      <ErrorBoundary
        fallback={<p>Something went wrong. Try reloading the page!</p>}
      >
        <Suspense fallback={<LoadingCircle />}>
          <FollowWrapper>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {users.map((user: Record<string, any>) => {
              const profileLink = `/users/${user.id}`;
              return (
                <UserWrapper key={user.id}>
                  <Avatar userId={user.id} />
                  <UserInfo>
                    <Link href={profileLink}>{user.name}</Link>
                    <Link tertiary size="small" href={profileLink}>
                      @{user.username}
                    </Link>
                  </UserInfo>
                </UserWrapper>
              );
            })}
          </FollowWrapper>
        </Suspense>
      </ErrorBoundary>
      <DiscoverbarLine />
      <DiscoverBarFooter />
    </DiscoverbarWrapper>
  );
};
