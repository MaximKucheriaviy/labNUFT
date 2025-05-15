import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href={"/time"}>time</Link>
        </li>
        <li>
          <Link href={"/weather"}>Weather</Link>
        </li>
        <li>
          <Link href={"/gql"}>GQL</Link>
        </li>
        <li>
          <Link href={"/api/graphql"}>Apollo server</Link>
        </li>
      </ul>
    </>
  );
}
