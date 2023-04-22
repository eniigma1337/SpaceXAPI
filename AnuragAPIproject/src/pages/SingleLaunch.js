import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";
import { Map } from "../components";

export default function SingleLaunch() {
  const [singleLaunch, setSingleLaunch] = useState(null);
  const [location, setLocation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://api.spacexdata.com/v4/launches/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setSingleLaunch(data);
          return data.launchpad;
        })
        .then((someValue) => {
          return fetch(`https://api.spacexdata.com/v4/launchpads/${someValue}`);
        })
        .then((response) => response.json())
        .then((data) => {
          setLocation(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [id]);

  return (
    <>
      {!singleLaunch || !location ? (
        <Loading />
      ) : (
        <div>
          <div className="inline-block pt-[12vh] pl-[4vw]">
            <Link
              to="/launches"
              className="text-white opacity-75 text-xl hover:opacity-100"
            >
              &larr;
              <div>All Launches</div>
            </Link>
          </div>
          <section className="pt-32 max-width grid grid-cols-1 gap-10 md:grid-cols-2">
            <article>
              {singleLaunch.links.patch.large ? (
                <img
                  src={singleLaunch.links.patch.large}
                  alt={singleLaunch.name}
                />
              ) : (
                <img
                  src="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
                  alt="launch mission image"
                />
              )}
            </article>

            <article>
              <h1 className="heading">{singleLaunch.name}</h1>
              <h2 className="text-white font-bold text-xl opacity-75 mt-2">
                {singleLaunch.success ? (
                  <div className="text-green-500 tex-3xl">Successful</div>
                ) : (
                  <div className="text-red-500 text-3xl">Failed</div>
                )}
                Launch Date: {singleLaunch.date_local}
              </h2>

              <p className="text-white opacity-75 my-10">
                {singleLaunch.details}
              </p>
              <ul className="flex flex-wrap items-center justify-start gap-8">
                <li>
                  <a
                    href={singleLaunch.links.article}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Read Article
                  </a>
                </li>
                <li>
                  <a
                    href={singleLaunch.links.webcast}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Launch Video
                  </a>
                </li>
              </ul>
            </article>
          </section>
          <div className="mb-16">
            <Map latitude={location.latitude} longitude={location.longitude} />
          </div>
        </div>
      )}
    </>
  );
}
