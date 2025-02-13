import { registerAction } from "./action";

export default function Page() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-medium text-black mb-2">Welcome!</h2>
      <h3 className="text-xs font-thin text-gray-500 mb-6">
        For register please enter your details.
      </h3>
      <form className="space-y-4" action={registerAction}>
        <div>
          <label>Name</label>
          <input name="name" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
