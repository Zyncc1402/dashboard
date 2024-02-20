import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/utils/data";
import { updateProduct } from "@/actions/action";

const Products = async ({params}) => {
  const id = params.id;
  const product = await getProduct(id);
  return (
    <div className="flex">
      <Sidebar />
      <div className="dashboard p-4">
        <Navbar />
        <div className="mt-6 navbar flex justify-center rounded-md p-20">
          <div className="leftCol flex h-[500px] w-[500px]">
            <Image
              alt="User Picture"
              src={product.img || "/noavatar.png"}
              width={500}
              height={500}
              quality={100}
              style={{ objectFit: "cover" }}
              className="rounded-sm"
            />
          </div>
          <div className="rightColflex flex-col">
            <form
              action={updateProduct}
              className="flex flex-col gap-y-4 w-[600px]"
            >
              <input type="hidden" name="id" value={product._id} />
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                placeholder="Title"
                name="title"
                className="text-black"
                defaultValue={product.title}
              />
              <Label htmlFor="email">Description</Label>
              <Input
                type="description"
                placeholder="Description"
                name="description"
                className="text-black"
                defaultValue={product.description}
                required
              />
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                placeholder="Price"
                name="price"
                className="text-black"
                defaultValue={product.price}
              />
              <Label htmlFor="phone">Quantity</Label>
              <Input
                type="number"
                placeholder="Quantity"
                name="quantity"
                className="text-black"
                defaultValue={product.stock}
              />
              <Label htmlFor="phone">Image</Label>
              <Input
                type="text"
                placeholder="Image"
                name="img"
                className="text-black"
                defaultValue={product.img}
              />
              <Button type="submit">Update Product</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;