import { SimpleGrid, Box } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.wrike.com/tp/static/assets/img/features-background/feature-bg-2-dark.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
      }}
      className="py-8  w-[90%] m-auto "
    >
      <h1 className="font pb-16 text-4xl text-left font-bold tracking-tight text-[#4299e1] sm:text-6xl">
        About Us
      </h1>
      <SimpleGrid pt="16px" columns={{ sm: 1, md: 2, lg: 2 }} spacing={10}>
        <Box>
          <p className="mt-4 text-xl text-gray-900">
            Mits spectra is a top leading dermatology pharma company in India.
            It is a venture of{" "}
            <span className="text-[#ed2880]">MITS HEALTH CARE</span> , the
            Company is best known for its excellent range of products and
            efficiency. Our derma product range cures diseases like acne,
            alopecia areata, eczema psoriasis, vitiligo, fungal infection,
            insect bite, and rosacea. We are dedicated to innovation through new
            regimens, new medicine, a new molecule, and new ways to beautify the
            world. Our team is dedicated and very hard-working towards their
            work. We provide tablets, capsules, injections, creams, lotions,
            ointments, face wash, oil, dusting powder, shampoo, and soap. We are
            WHO-GMP certified company focused on dermatology and cosmetology.
          </p>
        </Box>
        <Box>
          {" "}
          <img
            src="https://adpostman.com/wp-content/uploads/classified-listing/2022/08/about_US-scaled.jpg"
            alt=""
            className="h-[500px] w-[500px] object-cover object-center"
          />
        </Box>
      </SimpleGrid>
    </div>
  );
}
