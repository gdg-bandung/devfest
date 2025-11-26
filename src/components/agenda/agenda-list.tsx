import { For } from "solid-js";
import type { Session } from "../../data/agenda.data";
import AgendaItem from "./agenda-item";

interface AgendaListSolidProps {
  location: string;
  description: string;
  agenda: Session[];
}

export default function AgendaList(props: AgendaListSolidProps) {
  const location = () => props.location;
  const description = () => props.description;

  return (
    <div class="flex flex-col">
      {/* Location Header */}
      <div class="grid grid-cols-1 lg:grid-cols-[250px_40px_1fr] gap-y-4 lg:gap-x-8 relative group">
        {/* Left Column (Empty on Desktop) */}
        <div class="hidden lg:block"></div>

        {/* Center Column: Timeline & Dot (Desktop) */}
        <div class="hidden lg:flex flex-col items-center relative">
          {/* Line connecting to next item */}
          <div class="w-[2.54px] absolute top-2 h-full left-1/2 -translate-x-1/2" style="background: radial-gradient(50% 50% at 50% 50%, #1F5FC7 0%, #0F2E61 100%);"></div>
          {/* Large Dot */}
          <div class="w-5 h-5 rounded-full bg-[#4285F4] z-10 mt-0 ring-4 ring-[#4285F4]/30"></div>
        </div>

        {/* Right Column: Location Text (Desktop) */}
        <div class="hidden lg:flex flex-col items-start gap-4 pt-0 mb-8">
          <p class="flex items-center gap-8">
            <span class="text-[#4285F4] font-bold tracking-wider text-lg">
              LOCATION
            </span>
            <span class="text-white font-bold text-xl">{location()}</span>
          </p>
          <p class="text-light-gray">{description()}</p>
        </div>

        {/* Mobile Location Layout */}
        <div class="lg:hidden flex flex-col relative pl-12">
          {/* Mobile Dot */}
          <div class="absolute left-3 top-1 w-4 h-4 rounded-full bg-[#4285F4] ring-2 ring-[#4285F4]/30 z-10"></div>
          {/* Mobile Line */}
          <div
            class="absolute left-[19px] top-2 bottom-0 w-[2.54px] -z-10"
            style="background: radial-gradient(50% 50% at 50% 50%, #1F5FC7 0%, #0F2E61 100%); height: calc(100% + 30px);"
          ></div>

          <div class="flex flex-col gap-1 mb-8">
            <span class="text-[#4285F4] font-bold tracking-wider text-sm">
              LOCATION
            </span>
            <span class="text-white font-bold text-lg">{location()}</span>
            <p class="text-light-gray">{description()}</p>
          </div>
        </div>
      </div>

      {/* Agenda Items */}
      <For each={props.agenda}>
        {(session) => <AgendaItem session={session} isLast={false} />}
      </For>

      {/* Closing Indicator */}
      <div class="grid grid-cols-1 lg:grid-cols-[250px_40px_1fr] gap-y-4 lg:gap-x-8 relative group">
        {/* Left Column */}
        <div class="hidden lg:block"></div>

        {/* Center Column: Closing Dot */}
        <div class="hidden lg:flex flex-col items-center relative">
          {/* Closing Dot */}
          <div class="w-5 h-5 rounded-full bg-[#4285F4] z-10 -mt-2 ring-4 ring-[#4285F4]/30"></div>
        </div>

        {/* Right Column */}
        <div class="hidden lg:block"></div>

        {/* Mobile Closing Dot */}
        <div class="lg:hidden flex flex-col relative pl-12 h-8">
          {/* Mobile Dot */}
          <div class="absolute left-3 -bottom-3 w-4 h-4 rounded-full bg-[#4285F4] ring-2 ring-[#4285F4]/30 z-10"></div>
        </div>
      </div>
    </div>
  );
}
