import { Product } from "@/models/ProductModel";
import { User } from "@/models/UserModel";
import { connectToDB } from "@/utils/db";

export const getUsers = async () => {
  try {
    connectToDB();
    const res = await User.find();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    connectToDB();
    const res = await User.findById(id);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch User");
  }
};

export const getProducts = async () => {
  try {
    connectToDB();
    const res = await Product.find();
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Products");
  }
};

export const getProduct = async (id) => {
  try {
    connectToDB();
    const res = await Product.findById(id);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Product");
  }
};