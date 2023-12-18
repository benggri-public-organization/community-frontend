'use client';

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Navbar fluid rounded border>
      <Navbar.Brand>
        <Image src={`/images/logo.png`} alt="logo" width={20} height={20} />
        <span className="self-center whitespace-nowrap text-xl font-semibold">{`${process.env.NEXT_PUBLIC_APP_TITLE}`}</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Benggri</span>
          </Dropdown.Header>
          <Dropdown.Item>I&#x27;m developer with</Dropdown.Item>
          <Dropdown.Item>Java & Spring Boot</Dropdown.Item>
          <Dropdown.Item>Next.js</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Thank you</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">홈</Navbar.Link>
        <Navbar.Link>
          <Dropdown inline label={"게시판"}>
            <Dropdown.Item href="/board/free">자유게시판</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/board/develop">개발공부</Dropdown.Item>
          </Dropdown> 
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}