import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

import { Container } from "@/components/Container";
import { contactanos } from "@/components/data";
import SimpleSectionCenter from "@/components/SimpleSectionCenter";
import { Cta } from "@/components/Cta";

export default function Contacts() {
  return (
    <Container>
      <div id="team" className="section relative pb-8">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <SimpleSectionCenter data={contactanos} />
          <div className="flex flex-wrap flex-row -mx-4 justify-center">

              <div className="m-10 w-full sm:w-1/4">
                <h2 className="text-2xl font-semibold dark:text-white">
                  Canales de contacto
                </h2>
                {/* <p className="max-w-sm mt-5">
          Completá el formulario de contacto y envianos tu consulta, envianos un email o llamanos.
          Estamos aquí para ayudarte a conocer más sobre nuestra labor y cómo colaboramos para mejorar la salud pública.
          </p> */}

                <div className="mt-5">
                  <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Azcuénaga 2367 CABA</span>
                  </div>

                  <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                    <EnvelopeIcon className="w-4 h-4" />
                    <a href={`mailto:diazjaver@hotmail.com`}>
                      consultas@idisa.com
                    </a>
                  </div>

                  <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                    <PhoneIcon className="w-4 h-4" />
                    <a href={`tel:1150108094`}>+54-911-34569789</a>
                  </div>
                </div>
              </div>
              <div className="m-10 w-full sm:w-1/4">
                <form>
                <h2 className="text-2xl mb-6 font-semibold dark:text-white text-center">
                  Envianos tu consulta
                </h2>
                  <input
                    type="checkbox"
                    id=""
                    className="hidden display-none"
                  ></input>

                  <div className="mb-5">
                    <input
                      type="text"
                      placeholder="Nombre"
                      autoComplete="false"
                      className="w-full px-4 py-3 border-2 placeholder:text-gray-400 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4 "
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email_address" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="email_address"
                      type="email"
                      placeholder="email"
                      name="email"
                      autoComplete="false"
                      className="w-full px-4 py-3 border-2 placeholder:text-gray-400 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      placeholder="Tu consulta"
                      className="w-full px-4 py-3 border-2 placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-semibold text-white bg-indigo-600 transition-colors rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
                  >
                    Enviar
                  </button>
                </form>
              </div>

          </div>{" "}
        </div>
      </div>{" "}
    </Container>
  );
}
