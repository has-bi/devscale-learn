// import { ProfileCard } from "@/components/card";

// export default function Page() {
//   return (
//     <main className="space-y-4">
//       <div> Page </div>
//       <ProfileCard name={"Hasbi"} age={20} gender={"Male"} />
//       <ProfileCard name={"Hasbi"} age={20} gender={"female"} />
//     </main>
//   );
// }

import Link from "next/link";

export default async function Page() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/Py8u8MXim4oD");
  const data = await res.json();

  return (
    <main>
      {data.data.map((item) => {
        return (
          <div key={item._id}>
            <Link href={`/todos/${item._id}`}>
              {" "}
              - {item.name} : {item.content}
            </Link>
          </div>
        );
      })}
    </main>
  );
}
