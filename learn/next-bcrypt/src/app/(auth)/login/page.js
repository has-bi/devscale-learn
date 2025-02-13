"use client";

import { useActionState } from "react";
import { loginAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-medium text-black mb-2">Welcome Back</h2>
      <h3 className="text-xs font-thin text-gray-500 mb-6">
        Welcome back! Please enter your details.
      </h3>
      <form className="space-y-4" action={formAction}>
        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
        {!state?.success && <div>{state?.message}</div>}
        {state?.success && <div>{state?.message}</div>}
      </form>
    </div>
  );
}
