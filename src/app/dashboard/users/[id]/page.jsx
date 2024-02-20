import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/actions/action";
import { getUser } from "@/utils/data";

const Products = async ({params}) => {
  const id = params.id;
  const user = await getUser(id)
  return (
    <div className="flex">
      <Sidebar />
      <div className="dashboard p-4">
        <Navbar />
        <div className="mt-6 navbar flex justify-center rounded-md p-20">
          <div className="leftCol flex h-[500px] w-[500px]">
            <Image
              alt="User Picture"
              src={user.img || "/noavatar.png"}
              width={500}
              height={500}
              quality={100}
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
          <div className="rightColflex flex-col">
            <form
              action={updateUser}
              className="flex flex-col gap-y-4 w-[600px]"
            >
              <input type="hidden" name="id" value={user._id} />
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                className="text-black"
                defaultValue={user.name}
              />
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                className="text-black"
                defaultValue={user.email}
              />
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="tel"
                placeholder="Phone"
                name="phone"
                className="text-black"
                defaultValue={user.phone}
              />
              <Label htmlFor="phone">Image</Label>
              <Input
                type="text"
                placeholder="Image"
                name="img"
                className="text-black"
                defaultValue={user.img}
              />
              <Label htmlFor="admin">IsAdmin?</Label>
              <select
                type="tel"
                placeholder="isAdmin?"
                name="admin"
                className="text-black rounded-md p-2"
                defaultValue={user.isAdmin}
              >
                <option value={"true"}>Yes</option>
                <option value={"false"}>No</option>
              </select>
              <Button type="submit">Update</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
