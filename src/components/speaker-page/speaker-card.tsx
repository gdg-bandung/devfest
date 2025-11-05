import { PropertyType, ThemeColor } from "../../consts";

const color: Record<
  (typeof ThemeColor)[keyof typeof ThemeColor],
  { backgroundColor: string; borderColor: string }
> = {
  blue: {
    backgroundColor: "bg-blue",
    borderColor: "border-dark-blue",
  },
  green: {
    backgroundColor: "bg-green",
    borderColor: "border-dark-green",
  },
  red: {
    backgroundColor: "bg-red",
    borderColor: "border-dark-red",
  },
  yellow: {
    backgroundColor: "bg-yellow",
    borderColor: "border-dark-yellow",
  },
  rainbow: {
    backgroundColor: "bg-rainbow",
    borderColor: "border-transparent",
  },
};

export default function SpeakerCard({
  name,
  role,
  themeColor,
  propertyType,
  photoUrl = "",
  customClass = "",
  isSeeAllSpeakerCard = false,
}: {
  name: string;
  role: string;
  themeColor: (typeof ThemeColor)[keyof typeof ThemeColor];
  propertyType: (typeof PropertyType)[keyof typeof PropertyType];
  photoUrl?: string;
  customClass?: string;
  isSeeAllSpeakerCard?: boolean;
}) {
  return (
    <article
      class={`aspect-square w-full relative overflow-hidden ${customClass}`}
    >
      <img
        src={`/images/speaker/card/${themeColor}-card.svg`}
        class="w-full aspect-square top-0 left-0 absolute"
        alt="background card"
      />
      {Boolean(photoUrl) && (
        <img
          src={photoUrl}
          alt={name}
          class="w-[98%] aspect-square object-contain bottom-1 left-1 absolute"
        />
      )}
      {isSeeAllSpeakerCard && (
        <img
          src={`/images/speaker/photos/placeholder.webp`}
          alt="See All Speakers Placeholder"
          class="w-[98%] aspect-square object-contain bottom-1 left-1 absolute"
        />
      )}
      <img
        src={`/images/speaker/gdg/${themeColor}-gdg.svg`}
        alt={`${themeColor} GDG`}
        class="absolute top-px lg:top-1.5 left-0.5 lg:left-2 w-1/4"
      />
      <img
        src={`/images/speaker/property/${propertyType}.svg`}
        alt={propertyType}
        class="absolute bottom-0.5 lg:bottom-1 right-1 lg:right-2 w-1/6"
      />

      {isSeeAllSpeakerCard ? (
        <a
          href="/speaker"
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-5 px-6 bg-blue border-4 border-dark-blue rounded-xl text-white font-bold text-2xl hover:bg-dark-blue transition-opacity duration-300 focus:outline-none focus:ring-4 focus:ring-blue focus:ring-opacity-50 cursor-pointer z-30"
        >
          See&nbsp;All&nbsp;Speakers
        </a>
      ) : (
        <div
          class={`absolute bottom-[3%] left-[3%] w-[73%] lg:w-[72%] text-center p-[3%] ${color[themeColor].backgroundColor} ${color[themeColor].borderColor} bg-opacity-80 rounded-lg lg:rounded-2xl`}
        >
          <h3
            class={`${
              name.length > 20
                ? "text-[8px] sm:text-xs md:sm lg:text-base xl:text-lg"
                : "text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-2xl"
            } font-bold text-white text-start`}
          >
            {name}
          </h3>
          <p class="text-[8px] sm:text-xs lg:text-sm xl:text-base text-white italic mt-0.5 md:mt-1 lg:mt-1.5 text-start">
            {role}
          </p>
        </div>
      )}
    </article>
  );
}
