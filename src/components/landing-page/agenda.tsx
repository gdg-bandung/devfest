import { createSignal, For } from "solid-js";
import { listStageAgenda } from "../../data/agenda.data";
import StageTabs from "../agenda/stage-tabs";
import BoxIcon from "../ui/icons/box";

export default function AgendaSection() {
  const [activeStage, setActiveStage] = createSignal(0);

  // Get first 4 agendas for the active stage
  const getFilteredAgenda = () => {
    const stage = listStageAgenda[activeStage()];
    return stage.agenda.slice(0, 4);
  };

  const currentStage = () => listStageAgenda[activeStage()];

  const themeStyles = {
    blue: "bg-blue",
    yellow: "bg-yellow",
    green: "bg-green",
    red: "bg-red",
  };

  return (
    <section class="relative py-16 lg:py-24 overflow-hidden">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div class="flex flex-col justify-start lg:col-span-2">
            <h2 class="text-4xl lg:text-6xl font-bold text-white mb-6">
              AGENDA
            </h2>
            <p class="text-light-gray text-base lg:text-lg leading-relaxed mb-6 lg:mb-9">
              We will held the event with 6 stages:{" "}
              <span class="text-blue font-semibold">
                Bandung Logitech Verse
              </span>
              , <span class="text-green font-semibold">Spark Sessions</span>,{" "}
              <span class="text-yellow font-semibold">AI Alchemy Lab</span>,{" "}
              <span class="text-red font-semibold">Cloud Architect Hub</span>,{" "}
              <span class="text-green font-semibold">Beyond Innovation</span>{" "}
              and{" "}
              <span class="text-yellow font-semibold">AI Builders Zone</span>
            </p>
            <div class="w-[51px] h-px bg-white mb-6 lg:mb-9"></div>
            <p class="text-light-gray text-base lg:text-lg leading-relaxed">
              {currentStage().description}
            </p>
          </div>

          {/* Right Column - Agenda Cards */}
          <div class="flex flex-col lg:col-span-3">
            {/* Stage Tabs */}
            <div class="mb-8">
              <StageTabs
                selectedStageIndex={activeStage}
                setSelectedStageIndex={setActiveStage}
              />
            </div>

            {/* Timeline with Cards */}
            <div class="relative">
              {/* Vertical Timeline Line */}
              <div
                class="absolute left-4 top-0 bottom-0 w-[2.54px]"
                style="background: radial-gradient(50% 50% at 50% 50%, #1F5FC7 0%, #0F2E61 100%);"
              ></div>

              {/* Agenda Cards */}
              <div class="space-y-0">
                <For each={getFilteredAgenda()}>
                  {(session) => (
                    <div class="relative pl-12 pb-8">
                      {/* Timeline Dot  */}
                      <div class="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-blue z-10"></div>

                      {/* Card */}
                      <div
                        class={`relative rounded-2xl p-6 overflow-hidden text-white transition-all duration-300 hover:scale-[1.02] ${themeStyles[session.theme]
                          }`}
                      >
                        {/* Background Pattern */}
                        <BoxIcon
                          fill="white"
                          class="absolute right-0 top-0 bottom-0 h-full opacity-20 pointer-events-none mix-blend-overlay flex items-center justify-end overflow-hidden w-auto"
                        />

                        {/* Content */}
                        <div class="relative z-10">
                          <h4 class="text-xl lg:text-2xl font-bold mb-2 leading-tight">
                            {session.title || session.category}
                          </h4>
                          {session.subtitle && (
                            <p class="text-white/90 text-sm lg:text-base font-medium leading-relaxed whitespace-pre-line">
                              {session.subtitle}
                            </p>
                          )}
                          <p class="text-white/80 text-xs lg:text-sm mt-2">
                            {session.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </For>

                {/* Closing Dot - Yellow */}
                <div class="relative pl-12">
                  <div class="absolute left-2.5 top-0 w-3 h-3 rounded-full bg-blue z-10"></div>
                </div>
              </div>
            </div>

            {/* Show More Button */}
            <div class="flex justify-center mt-8">
              <a
                href="/agenda"
                class="px-6 py-4 lg:px-9 lg:py-6 bg-blue border-2 border-dark-blue text-white font-medium text-base lg:text-xl rounded-2xl"
              >
                Show More Agenda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
