"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function loginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "User not found with this email",
    };
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return {
      success: false,
      message: "Invalid password",
    };
  }

  return {
    success: true,
    message: "Login successful",
  };
}
