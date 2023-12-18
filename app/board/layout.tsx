'use client';

import { Sidebar } from 'flowbite-react';

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div>
      <Sidebar aria-label="board sidebar">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/board/free">자유게시판</Sidebar.Item>
            <Sidebar.Item href="/board/develop">개발공부</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      {children}
    </div>
  );
}