import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Acne() {
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
                ACNE
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#4299e1]  sm:text-4xl">
                What is Acne ?
              </h1>
              <p className="mt-6 text-sm leading-8 text-gray-700">
                In order to cause acne, the skin's pores must be clogged with
                hair, sebum (an oily fluid), bacteria, and dead skin cells.
                Blackheads, whiteheads, nodules, and various varieties of
                pimples are caused by these obstructions. The majority of people
                encounter this skin issue. Most people have acne at some point
                in their lives, and it is estimated that 80% of those between
                the ages of 11 and 30 will experience it at least mildly.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[500px] h-[500px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://assets.nhs.uk/nhsuk-cms/images/S_0917_acne_M1080444.width-1534_d6DPxCE.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#4299e1]  sm:text-4xl">
                Acne Affect
              </h1>
              <p>
                The majority of those affected are teenagers and young adults
                going through hormonal changes, however, many people battle acne
                well into their 20s, 30s, and beyond. Some people may experience
                their first case of acne as adults.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                Types of Acne
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Blackheads
                    </strong>{" "}
                    are open skin lumps that collect extra oil and dead skin.
                    The obstructed follicle causes an uneven light reflection,
                    which is what causes the black patches that resemble dirt
                    deposits.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Whiteheads
                    </strong>{" "}
                    Bumpy areas that are kept closed by skin debris and oil.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Papules
                    </strong>{" "}
                    Tiny pimples that are red or pink and swell up.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Pustules are pus-filled pimples
                    </strong>{" "}
                    They resemble red circles in appearance.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Encircling whiteheads
                    </strong>{" "}
                    If they are picked or scratched, they may leave scars.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Fungal acne (pityrosporum folliculitis):
                    </strong>{" "}
                    This type occurs when an excess of yeast develops in the
                    hair follicles. They could become swollen and itching.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Nodules
                    </strong>{" "}
                    Bumpy areas that are kept closed by skin debris and oil.Firm
                    zits buried deep beneath the skin. They hurt and are big.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Cysts
                    </strong>{" "}
                    Acne that is pus-filled. These might leave scars.
                  </span>
                </li>
              </ul>
              {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p> */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-[#4299e1] ">
                Cause
              </h2>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Stress
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Genetics
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Some medicines.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Pollution in the air.
              </p>

              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Wearable clothing
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Picking at an acne scar.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Hormone levels change
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Using fatty or oily products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
