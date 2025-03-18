import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href={"/"}>Hello</Link>
        </li>
        <li>
          <Link href={"/"}>Fruit</Link>
        </li>
        <li>
          <Link href={"/"}>People</Link>
        </li>
        <li>
          <Link href={"/"}>Weather</Link>
        </li>
      </ul>
    </>
  );
}
