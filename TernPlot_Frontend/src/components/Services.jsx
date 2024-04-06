import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { services } from "../constants";
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section crosses id="how-to-use">
      <div className="container">
        <Heading title="How to use." text="Here's how you can use TernPlot" />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[30rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[36rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Image!"
                height={730}
                src=""
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-2">Tern Plot</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                Input ternary components, generate compatibility triangles, and
                analyze compound interactions effortlessly.{" "}
              </p>
              <ul className="body-3">
                {services.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src=""
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Image 2"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Title 2</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, quis mollitia neque ipsa, debitis aut enim harum
                  quam eius.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Title 3</h4>
                <p className="body-2 mb-[1.5rem] text-n-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus facilis
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src=""
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Image 3"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
