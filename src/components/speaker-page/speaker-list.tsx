import { createSignal } from "solid-js";
import { PropertyType } from "../../consts";
import { SPEAKERS } from "../../data/speakers.data";
import SpeakerCard from "./speaker-card";

const tabs = [
  { name: "All Speaker", key: "all" },
  { name: "Web Development", key: PropertyType.WEB },
  { name: "Mobile", key: PropertyType.MOBILE },
  { name: "Cloud", key: PropertyType.CLOUD },
  { name: "AI/ML", key: PropertyType.AI },
  { name: "Design", key: PropertyType.DESIGN },
  { name: "More", key: PropertyType.GENERAL },
];

export default function SpeakerList() {
  const [activeTab, setActiveTab] = createSignal(tabs[0].key);

  return (
    <section class="py-10 lg:py-9 px-8 lg:px-16 xl:px-[180px] overflow-hidden">
      <div class="container mx-auto">
        <div class="flex flex-col gap-12 lg:gap-20">
          <div class="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0 items-start lg:items-center">
            <h2 class="font-medium lg:text-2xl mr-20">
              OUR HONORABLE <br />
              <strong class="text-blue text-[40px] lg:text-[72px]">
                SPEAKER
              </strong>
            </h2>
            {/* Scrollable Navigation */}
            <div class="max-w-full lg:overflow-hidden scrollbar-gradient relative">
              <div class="max-w-full overflow-x-scroll overflow-y-hidden scrollbar-hide h-fit">
                <div class="flex gap-5 w-max justify-start lg:justify-end">
                  {tabs.map((tab) => (
                    <button
                      onClick={() => setActiveTab(tab.key)}
                      class={`px-6 py-2 text-lg rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                        activeTab() === tab.key
                          ? "bg-blue text-white hover:bg-dark-blue"
                          : "bg-dark-gray text-white hover:bg-gray"
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-11">
            {SPEAKERS.filter((speaker) =>
              activeTab() === "all"
                ? true
                : speaker.propertyType === activeTab()
            ).map((speaker) => (
              <SpeakerCard
                name={speaker.name}
                propertyType={speaker.propertyType}
                themeColor={speaker.themeColor}
                role={speaker.role}
                photoUrl={speaker.photoUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
