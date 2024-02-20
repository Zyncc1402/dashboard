"use server";

import { Product } from "@/models/ProductModel";
import { User } from "@/models/UserModel";
const bcrypt = require("bcrypt");
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateUser = async (formData) => {
  const { id, name, email, phone, admin, img } = Object.fromEntries(formData);
  await User.findByIdAndUpdate(id, {
    name,
    email,
    phone,
    img,
    isAdmin: admin,
  });
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  let { id, title, description, price, quantity, img } =
    Object.fromEntries(formData);
  await Product.findByIdAndUpdate(id, {
    title,
    description,
    price,
    stock: quantity,
    img,
  });
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addUser = async (formData) => {
  let { name, email, password, phone, isAdmin, img } =
    Object.fromEntries(formData);
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    phone,
    img,
    isAdmin,
  });
  await user.save();
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const createUser = async (name, email, image) => {
  const user = new User({
    name,
    email,
    img: image,
    isAdmin: "false",
  });
  await user.save();
  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData) => {
  let { title, description, price, quantity, img } =
    Object.fromEntries(formData);
  const product = new Product({
    title,
    description,
    price,
    stock: quantity,
    img,
  });
  await product.save();
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const id = formData.get("id");
  await User.findByIdAndDelete(id);
  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const id = formData.get("id");
  await Product.findByIdAndDelete(id);
  revalidatePath("/dashboard/products");
};
