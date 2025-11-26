import { createSignal } from "solid-js";
import { listStageAgenda } from "../../data/agenda.data";
import AgendaListSolid from "./agenda-list";
import StageTabs from "./stage-tabs";

export default function AgendaContent() {
  const [selectedStageIndex, setSelectedStageIndex] = createSignal(0);

  return (
    <section class="py-10 lg:py-9 px-8 lg:px-16 xl:px-[180px]">
      <div class="container mx-auto">
        {/* Stage Selection Buttons */}
        <div class="mb-8">
          <StageTabs
            selectedStageIndex={selectedStageIndex}
            setSelectedStageIndex={setSelectedStageIndex}
          />
        </div>

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
