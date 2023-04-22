import useFetch from "../hooks/useFetch";
import { Loading } from "../components";
import { Link } from "react-router-dom";

export default function Launches() {
  const [data] = useFetch("https://api.spacexdata.com/v4/launches");

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <section className="py-32 mx-16 ">
          <h1 className="heading text-center mb-10">Launches</h1>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 px-5">
            {data.map(({ id, name, links, details }) => (
              <Link
                to={`/launches/${id}`}
                key={id}
                className="p-5 bg-slate-900"
              >
                {links.patch.large ? (
                  <img src={links.patch.large} alt={name} />
                ) : (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                    alt="No Image Available"
                  />
                )}
                <h2 className="font-bold text-white mt-5 mb-3 text-xl">
                  {name}
                </h2>
                {
                  <p className="text-white opacity-75">
                    {details != null ? details : "No Details Available"}
                  </p>
                }
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
