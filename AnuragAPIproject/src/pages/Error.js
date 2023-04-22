import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section className="flex flex-col items-center pt-[20vh] text-center text-white h-screen">
        <h1 className="text-6xl">Page Could Not Be Found!</h1>
        <Link to="/">
          <p className="mt-12 text-4xl">Back</p>
          &larr;
        </Link>
      </section>
    </>
  );
}
