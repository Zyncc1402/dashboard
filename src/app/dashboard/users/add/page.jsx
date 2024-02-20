import { addUser } from '@/actions/action';
import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AddUser = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="dashboard p-4">
        <Navbar />
        <div className="mt-6 navbar flex justify-center items-center rounded-md p-20">
          <div className="rightColflex flex-col">
            <form
              action={addUser}
              className="flex flex-col gap-y-4 w-[600px]"
            >
              <input type="hidden" name="id" />
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                className="text-black"
              />
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                className="text-black"
              />
              <Label htmlFor="password">Password</Label>
              <Input
                type="text"
                placeholder="Password"
                name="password"
                className="text-black"
              />
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="tel"
                placeholder="Phone"
                name="phone"
                className="text-black"
              />
              <Label htmlFor="phone">Image</Label>
              <Input
                type="text"
                alt="profilePic"
                placeholder="Image"
                name="img"
                className="text-black"
              />
              <Label htmlFor="admin">IsAdmin?</Label>
              <select
                type="tel"
                placeholder="isAdmin?"
                name="isAdmin"
                className="text-black rounded-md p-2"
                defaultValue={"false"}
              >
                <option value={"true"}>Yes</option>
                <option value={"false"}>No</option>
              </select>
              <Button type="submit">Add User</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser