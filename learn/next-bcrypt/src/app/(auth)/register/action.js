"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function registerAction(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  //   Validate the email address
  if (!email.includes("@")) {
    return {
      success: false,
      message: "Invalid email address",
    };
  }

  //   Check collision (is user regiestered)
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 11);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  console.log(user);
}
