import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdSearch } from "react-icons/md";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { getUsers } from "@/utils/data";
import { deleteUser } from "@/actions/action";

export const revalidate = 300;

const Tables = async () => {
  const users = await getUsers();
  return (
    <>
      <div className="flex justify-between">
        <div className="search1 flex items-center rounded-md px-4 py-1">
          <MdSearch size={30} color="white" />
          <input
            type="text"
            placeholder="Search"
            className="inputSearch mx-4"
          />
        </div>
        <div>
          <Link href={'/dashboard/users/add'}>
            <Button>Add user</Button>
          </Link>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px] thead">Name</TableHead>
            <TableHead className="w-[20px] thead">Email</TableHead>
            <TableHead className="thead w-[100px]">Phone</TableHead>
            <TableHead className="thead w-[100px]">Created at</TableHead>
            <TableHead className="thead w-[100px]">Role</TableHead>
            <TableHead className="thead w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user._id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-x-2 font-bold capitalize">
                    <Image
                      alt="User Picture"
                      src={user.img || "/noavatar.png"}
                      width={30}
                      height={30}
                      quality={75}
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                    {user.name}
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone || "N/A"}</TableCell>
                <TableCell>{user.createdAt.toString().substr(4, 12)}</TableCell>
                <TableCell className="font-bold">
                  {(() => {
                    if (user.isAdmin === "true") {
                      return "Administrator";
                    }else {
                      return "Client";
                    }
                  })()}
                </TableCell>
                <TableCell className="w-[220px]">
                  <div className="flex gap-x-2">
                    <Link href={`/dashboard/users/${user._id}`}>
                      <Button>View</Button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" defaultValue={user._id} name="id" />
                      <Button variant={"destructive"} type="submit">
                        Delete
                      </Button>
                    </form>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Tables;
