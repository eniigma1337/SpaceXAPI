import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <section className="showcase">
      <div className="overlay">
        <article className="text-white">
          <h1 className="heading text-center uppercase tracking-wider">
            SpaceX Launches
          </h1>
          <div className="">
            <article className="text-center font-bold border-b-2 border-white mb-3 border-t-2 pb-2 my-3 uppercase tracking-wider">
              <h2 className="text-2xl mt-2">
                <Link to="/launches">Go To Launches &rarr;</Link>
              </h2>
            </article>
          </div>
          <p className="max-w-xl mx-auto text-center">
            This Website Uses SpaceX API to retrieve all the launches SpaceX has
            conducted and display the launch sites on Google Maps,
          </p>
        </article>
      </div>
    </section>
  );
}
