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
import { getProducts } from "@/utils/data";
import { deleteProduct } from "@/actions/action";
import Link from "next/link";

const Tables = async () => {
  const products = await getProducts();
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
          <Link href={'/dashboard/products/add'}>
            <Button>Add Product</Button>
          </Link>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[110px] thead">Title</TableHead>
            <TableHead className="w-[20px] thead">Description</TableHead>
            <TableHead className="thead w-[100px]">Created at</TableHead>
            <TableHead className="thead w-[100px]">Updated at</TableHead>
            <TableHead className="thead w-[100px]">Price</TableHead>
            <TableHead className="thead w-[100px]">Stock</TableHead>
            <TableHead className="thead w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product._id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-x-2">
                    <Image
                      alt="avatar"
                      src={product.img || "/noavatar.png"}
                      width={30}
                      height={30}
                      className="avatar rounded-full"
                    />
                    {product.title.slice(0, 30).concat("...")}
                  </div>
                </TableCell>
                <TableCell>
                  {product.description.slice(0, 40).concat("...")}
                </TableCell>
                <TableCell>
                  {product.createdAt.toString().substr(4, 12)}
                </TableCell>
                <TableCell>
                  {product.updatedAt.toString().substr(4, 17)}
                </TableCell>
                <TableCell className="font-bold">₹ {product.price}</TableCell>
                <TableCell className="font-bold">{product.stock}</TableCell>
                <TableCell className="w-[220px]">
                  <div className="flex gap-x-2">
                    <Link href={`/dashboard/products/${product._id}`}>
                      <Button>View</Button>
                    </Link>
                    <form action={deleteProduct}>
                      <input
                        type="hidden"
                        defaultValue={product._id}
                        name="id"
                      />
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
