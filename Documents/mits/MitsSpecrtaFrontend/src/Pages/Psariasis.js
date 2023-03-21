import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Psariasis() {
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
                PSARIASIS
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#4299e1]  sm:text-4xl">
                What is Psariasos ?
              </h1>
              <p className="mt-6 text-sm leading-8 text-gray-700">
                Skin inflammation is brought on by the autoimmune disease
                psoriasis. Psoriasis symptoms include thick patches of
                scale-covered, discolored skin. Plaques are the name for these
                scaly, thick patches. As a chronic skin disorder with no known
                cure, psoriasis can flare up at any time.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[500pz] h-[500px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://media.istockphoto.com/id/1168357569/photo/dermatological-skin-disease-psoriasis-eczema-dermatitis-allergies-skin-lesions-on-the-elbows.jpg?s=612x612&w=0&k=20&c=Qw6i_9pKPb_ioPXxr8mLf2vma4BJdPxRxu_TYnLQOwA="
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
                Types of Psoriasis
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Plaque psoriasis
                    </strong>{" "}
                    The most prevalent kind of psoriasis is plaque psoriasis.
                    Plaque psoriasis affects between 80% and 90% of those with
                    psoriasis.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Inverse psoriasis-
                    </strong>{" "}
                    This kind of shows up in the folds of skin. It results in
                    tiny, scale-free plaques.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Guttate psoriasis
                    </strong>{" "}
                    After a streptococcal infection-induced sore throat, guttate
                    psoriasis may manifest. It frequently affects children and
                    young adults and appears as tiny, red, drop-shaped scaly
                    patches.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Pustular psoriasis
                    </strong>{" "}
                    TPlaques are covered with tiny, pus-filled bumps in pustular
                    psoriasis.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Erythrodermic psoriasis
                    </strong>{" "}
                    More than 90% of skin is affected by this extreme form of
                    psoriasis. Skin shedding and extensive skin discoloration
                    are the results.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Sebopsoriasis
                    </strong>{" "}
                    This kind often manifests as lumps and plaques with a
                    greasy, yellow scale on face and scalp. This is a hybrid of
                    seborrheic dermatitis and psoriasis.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Nail psoriasis
                    </strong>{" "}
                    Skin darkening, pitting, and changes to fingernails and
                    toenails are all symptoms of nail psoriasis.
                  </span>
                </li>
                {/* <li className="flex gap-x-3">
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
                </li> */}
              </ul>
              {/* <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                  odio id et. Id blandit molestie auctor fermentum dignissim.
                  Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                  et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                  et ut. Ac lorem vel integer orci.
                </p> */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-[#4299e1] ">
                Symptoms of Psoriasisf
              </h2>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Skin pain.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Skin pain.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Joint pain.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Cracked, dry skin.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Nails that are pitted, cracked or crumbly
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-[#4299e1] ">
                Causes of Psoriasis
              </h2>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Emotional tension
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Skin damage caused by surgery, wounds, or scrapes.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Some drugs include beta-blockers and lithium.
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Weather-related changes in body temperature.
              </p>
              {/* <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Nails that are pitted, cracked or crumbly
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
