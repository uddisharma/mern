import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Vitiligo() {
  return (
    <div className="relative isolate overflow-hidden w-[90%] m-auto bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-black">
                VITILIGO
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#4299e1]  sm:text-4xl">
                What is Vitiligo ?
              </h1>
              <p className="mt-6 text-sm leading-8 text-gray-700">
                A skin condition called vitiligo (pronounced vit-il-EYE-go)
                results in the skin losing its color. On a person's skin, smooth
                white patches or macules (if they are 5mm or greater) or macules
                occur. It's possible for the hair on body to turn white if have
                vitiligo in an area where there is hair. The disease is brought
                on by the body's immune system destroying melanocytes, the skin
                cells that create melanin, the pigment that gives skin its
                color.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[500px] h-[500px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://media.istockphoto.com/id/1150687286/photo/cropped-back-view-of-beautiful-young-european-woman-with-skin-condition-that-causes-loss-of.jpg?s=612x612&w=0&k=20&c=Fzr55pvMwS_PgHVlzgzfoRtfGTfZ2byenLA-3TG-yOw="
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              {/* <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#4299e1]  sm:text-4xl">
                Acne Affect
              </h1>
              <p>
                The majority of those affected are teenagers and young adults
                going through hormonal changes, however, many people battle acne
                well into their 20s, 30s, and beyond. Some people may experience
                their first case of acne as adults.
              </p> */}
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                Types of Vitiligo
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Generalized
                    </strong>{" "}
                    which is the most typical form, when macules develop across
                    the body.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Segmental
                    </strong>{" "}
                    which is only present on one side of the body or in a
                    specific location, such as the hands or face
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Mucosal{" "}
                    </strong>{" "}
                    affects the genital and/or oral mucous membranes
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Focal
                    </strong>{" "}
                    it is an uncommon form where the macules are localized and
                    do not spread in a particular way for one to two years.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Trichome
                    </strong>{" "}
                    which indicates that there is a white or colorless center,
                    followed by a region of lighter pigmentation, and finally a
                    region of skin that is the normal color.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Universal
                    </strong>{" "}
                    is a different uncommon form of vitiligo in which more than
                    80% of the body's skin is pigment-free.
                  </span>
                </li>
              </ul>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                Causes of Vitiligo
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Autoimmune disorder:
                    </strong>{" "}
                    The immune system of the sick person may produce antibodies
                    that kill melanocytes
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Genetic factors
                    </strong>{" "}
                    The possibility of inheriting some risk factors for vitiligo
                    exists. Thirty percent of vitiligo cases are hereditary.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Neurogenic factors
                    </strong>{" "}
                    At epidermal nerve terminals, a chemical that is harmful to
                    melanocytes may be produced
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Self-destruction
                    </strong>{" "}
                    melanocytes self-destruct due to a flaw in them.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-[#4299e1] ">
                Symptoms
              </h2>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Skin color fades.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ The mucous in the mouth or nose is affected, as well as the
                eyes.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Face or head's hair starts gray or whitened.
              </p>
              {/* <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Pollution in the air.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
