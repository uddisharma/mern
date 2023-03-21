const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden  sm:py-22">
      <img
        src="https://img.freepik.com/free-vector/clean-medical-background-vector_53876-140865.jpg?size=626&ext=jpg&ga=GA1.1.1184991725.1675923171&semt=ais"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto  w-[90%] m-auto  px-6 lg:px-8">
        <div className="mx-auto pt-15  lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-[#4299e1]  sm:text-6xl">
            Who we are ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Mits spectra is a top leading dermatology pharma company in India.
            It is a venture of MITS HEALTH CARE, the Company is best known for
            its excellent range of products and efficiency. Our derma product
            range cures diseases like acne, alopecia areata, eczema psoriasis,
            vitiligo, fungal infection, insect bite, and rosacea. We are
            dedicated to innovation through new regimens, new medicine, a new
            molecule, and new ways to beautify the world. Our team is dedicated
            and very hard-working towards their work. We provide tablets,
            capsules, injections, creams, lotions, ointments, face wash, oil,
            dusting powder, shampoo, and soap. We are WHO-GMP certified company
            focused on dermatology and cosmetology.
          </p>
        </div>
        <div className="text-right pt-15">
          <h2 className="text-4xl pt-15 font-bold tracking-tight text-[#4299e1]  sm:text-6xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Our mission is to be the leading name in the field of dermatology
            and cosmetology globally Along with this, we want to “Serve Human
            Beings by delivering innovative & qualitative solutions to their
            Personal care needs”. We want to be known for our excellence in
            dermatology.
          </p>
        </div>
        <div className="text-left mt-15">
          <h2 className="text-4xl pt-15 font-bold tracking-tight text-[#4299e1] sm:text-6xl">
            Third-Party Manufacturing
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Mits Spectra is one of the top leading Third Party Manufacturing
            company in India for the Dermatology & Cosmeceutical range. We
            assure our customers of complete satisfaction with our high-quality
            product quality and services. The top quality Derma range has been
            provided by our company for a year. It is our responsibility as the
            most reputed and reliable cosmetics company in India to provide the
            safest product range for concerns about healthcare development.
          </p>
        </div>
        <div className="text-right mt-15">
          <h2 className="text-4xl pt-15 font-bold tracking-tight text-[#4299e1] sm:text-6xl">
            PCD Franchise
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Mits Spectra is one of the fastest-growing dermatology PCD Company
            in India. Mits Spectra has a different and huge variety of
            pharmaceutical products in Dermatology and Cosmetology. We are
            providing quality Pharma products at reasonable rates. Our company
            gave an immense range of dermatology pharmaceutical products such as
            skincare and cosmetic drug formulation. We provide face wash, oil,
            dusting powder, shampoo, soap, pills, capsules, injections, creams,
            lotions, and ointments. We are a dermatological and
            cosmetology-focused company with WHO-GMP certification.
          </p>
        </div>
        {/* <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-black">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </div>
  );
}
