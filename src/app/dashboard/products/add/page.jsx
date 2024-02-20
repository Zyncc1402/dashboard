import { addProduct } from "@/actions/action";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AddProduct = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="dashboard p-4">
        <Navbar />
        <div className="mt-6 navbar flex justify-center items-center rounded-md p-20">
          <div className="rightColflex flex-col">
            <form
              action={addProduct}
              className="flex flex-col gap-y-4 w-[600px]"
            >
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                placeholder="Title"
                name="title"
                className="text-black"
              />
              <Label htmlFor="email">Description</Label>
              <Input
                type="description"
                placeholder="Description"
                name="description"
                className="text-black"
              />
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                placeholder="Price"
                name="price"
                className="text-black"
              />
              <Label htmlFor="phone">Quantity</Label>
              <Input
                type="number"
                placeholder="Quantity"
                name="quantity"
                className="text-black"
              />
              <Label htmlFor="phone">Image</Label>
              <Input
                type="text"
                placeholder="Image"
                name="img"
                className="text-black"
              />
              <Button type="submit">Add Product</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
