import { createSignal } from "solid-js";
import { listStageAgenda } from "../../data/agenda.data";
import AgendaListSolid from "./agenda-list";

export default function AgendaContent() {
  const [selectedStageIndex, setSelectedStageIndex] = createSignal(0);

  return (
    <section class="py-10 lg:py-9 px-8 lg:px-16 xl:px-[180px]">
      <div class="container mx-auto">
        {/* Stage Selection Buttons */}
        <ul class="py-4 px-6 lg:py-6 lg:px-9 border-4 border-gray rounded-3xl flex flex-row gap-3 overflow-x-auto scrollbar-hide mb-8">
          {listStageAgenda.map((stageAgenda, index) => (
            <li class="shrink-0">
              <button
                onClick={() => setSelectedStageIndex(index)}
                class={`px-4 py-2 lg:px-6 lg:py-4 cursor-pointer rounded-2xl font-bold text-sm md:text-base lg:text-2xl transition-all duration-300 whitespace-nowrap ${selectedStageIndex() === index
                  ? "bg-blue text-white "
                  : "bg-transparent text-white"
                  }`}
              >
                {stageAgenda.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Agenda List */}
        <AgendaListSolid
          location={listStageAgenda[selectedStageIndex()].location}
          agenda={listStageAgenda[selectedStageIndex()].agenda}
          description={listStageAgenda[selectedStageIndex()].description}
        />
      </div>
    </section>
  );
}
