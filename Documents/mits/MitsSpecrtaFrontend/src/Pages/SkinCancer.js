import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function SkinCancer() {
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
                SKIN CANCER
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#4299e1]  sm:text-4xl">
                What is Skin Cancer ?
              </h1>
              <p className="mt-6 text-sm leading-8 text-gray-700">
                Skin cells grow and spread out in an uncontrolled, disordered
                manner to cause skin cancer. New skin cells often develop when
                existing ones die or are injured. When this process doesn't
                function properly, cells develop quickly, some of which may be
                aberrant cells. This group of cells could be malignant, which if
                not identified and treated early enough could spread to
                surrounding tissue or other parts of body, or noncancerous
                (benign), which doesn’t spread or harm. Sunlight's ultraviolet
                (UV) rays are a common cause of skin cancer.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[500px] h-[500px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://media.istockphoto.com/id/1217156782/photo/visual-examination-of-the-mole-for-the-presence-of-malignant-neoplasms-prevention-for.jpg?s=612x612&w=0&k=20&c=63iRy7hP8TMfWU5Kp2ShiegRwzzFDxwoNghk8bUFhFU="
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
                Types of Skin Cancer
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Basal cell carcinoma.
                    </strong>{" "}
                    Skin cancer that develops in the basal cell the s of skin is
                    known as basal cell carcinoma (BCC). The epidermis, the
                    outer layer of skin, has basal cells in the lower portion. A
                    small, occasionally glossy lump or scaly flat patch of skin
                    that slowly enlarges over time is the appearance of basal
                    cell carcinoma.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Squamous cell carcinoma.
                    </strong>{" "}
                    The second most frequent type of skin cancer after basal
                    cell carcinoma is squamous cell carcinoma (SCC) or cutaneous
                    squamous cell carcinoma (CSCC). Squamous cells in the
                    epidermis, the top layer of skin, are where it originates.
                    Squamous cell carcinomas typically develop on parts of the
                    body that are exposed to the sun the most, such as head,
                    arms, and legs. Mucous membranes, which line internal organs
                    and body cavities including mouth, lungs, and anus, are
                    another place of body where cancer can develop.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Melanoma
                    </strong>{" "}
                    The most dangerous kind of skin cancer is melanoma, which
                    means "black tumor" in Latin. It spreads easily to any organ
                    and expands swiftly. Melanocytes, which are skin cells, are
                    the source of melanoma. Melanin, a dark pigment that gives
                    skin its color, is produced by these cells. However, some
                    melanomas are pink, red, purple, or skin-colored. Melanomas
                    are often black or brown in hue. The majority of melanomas
                    start in normal skin, however about 30% start in moles that
                    already exist. Given that the majority of melanomas don't
                    begin as moles, it is crucial to remain alert to changes in
                    skin. Skin’s propensity to acquire melanoma may, however, be
                    predicted in part by the number of moles have. Knowing if
                    belong to a population with a higher risk of acquiring
                    melanoma skin cancer is crucial. Due to melanomas' rapid
                    rate of growth, delaying treatment might occasionally mean
                    the difference between life and death. Since melanomas have
                    a 99% cure rate if identified in the earliest stages,
                    knowing risk might help be especially alert in detecting
                    changes in skin and obtaining skin checks. Early
                    identification is important since the depth of the malignant
                    development directly affects the effectiveness of the
                    treatment.
                  </span>
                </li>
                {/* <li className="flex gap-x-3">
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
                </li> */}
              </ul>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                Types of Squamous cell carcinoma.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Cutaneous
                    </strong>{" "}
                    Cancer that is contained to the top layer of skin (in situ)
                    or cancer that has spread below the skin's surface.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Metastatic
                    </strong>{" "}
                    cancer that has spread outside of skin to other parts of
                    body.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Signs of Squamous cell carcinoma.
                    </strong>{" "}
                    ⦁ A lump or bump that may feel dry, scratchy, scaly, be a
                    different color from the surrounding skin, or feel lumpy
                    (actinic keratosis).
                    <br />
                    ⦁ A lesion where the tissue on lower lip turns pale, dry,
                    and cracked (cheilitis). When are exposed to the sun, this
                    could burn
                    <br />⦁ In mouth, on tongue, gums, or cheeks, there are
                    white or pale spots (leukoplakia).
                  </span>
                </li>
              </ul>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                Types of Basal cell carcinoma.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Nodular
                    </strong>{" "}
                    The most common BCC is this one. Nodular BCC appears as a
                    spherical pimple with surrounding blood vessels that are
                    visible (telangiectasias).
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Superficial spreading
                    </strong>{" "}
                    small, shallow marks on the skin that are a little bit paler
                    in color than the surrounding skin caused by this sort of
                    lesion. These lesions develop on arms, legs, and torso.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Sclerosing (morpheaform)
                    </strong>{" "}
                    These malignant lesions resemble scars and grow over time
                    gradually. The face is where this kind is most prevalent.
                    This kind may also appear as a tiny red dot on the skin.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Pigmented
                    </strong>{" "}
                    This rare form of BCC results in hyperpigmentation, or the
                    darkening of a specific area of skin relative to the
                    surrounding skin.
                  </span>
                </li>
              </ul>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                Symptoms of Melanoma
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Asymmetry
                    </strong>{" "}
                    The two halves are not equal.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Border
                    </strong>{" "}
                    There are rough edges.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      ⦁ Color
                    </strong>{" "}
                    The color is mottled and uneven, with shades of brown,
                    black, gray, red, or white.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-[#4299e1] ">
                      Diameter
                    </strong>{" "}
                    The spot is larger than the eraser's tip (6.0 mm).
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
                Symptoms of Basal cell carcinoma.
              </h2>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Face
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Scalp
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Nose
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ EyeLids
              </p>

              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Legs
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Ears
              </p>
              <p className="text-base pt-5 font-semibold leading-7 text-black">
                ⦁ Arms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
