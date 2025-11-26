import { For, Show } from "solid-js";
import type { Session } from "../../data/agenda.data";
import BoxIcon from "../ui/icons/box";

interface AgendaItemSolidProps {
  session: Session;
  isLast?: boolean;
}

const themeStyles = {
  blue: "bg-[#4285F4]",
  yellow: "bg-[#FBBC04]",
  green: "bg-[#34A853]",
  red: "bg-[#EA4335]",
};

const badgeStyles = {
  blue: "bg-[#4285F4]",
  yellow: "bg-[#FBBC04] text-black",
  green: "bg-[#34A853]",
  red: "bg-[#EA4335]",
};

export default function AgendaItemSolid(props: AgendaItemSolidProps) {
  const bgColor = () => themeStyles[props.session.theme];
  const badgeColor = () => badgeStyles[props.session.theme];
  const isLast = () => props.isLast ?? false;

  return (
    <div class="grid grid-cols-1 lg:grid-cols-[250px_40px_1fr] gap-y-4 lg:gap-x-8 relative group">
      {/* Mobile Timeline Line (Hidden on Desktop) */}
      <div
        class={`absolute left-[19px] top-10 bottom-0 w-[2.54px] lg:hidden -z-10 ${isLast() ? "h-[calc(100%-20px)]" : "h-full"
          }`}
        style="background: radial-gradient(50% 50% at 50% 50%, #1F5FC7 0%, #0F2E61 100%);"
      ></div>

      {/* Left Column: Category & Time */}
      <div class="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 lg:gap-2 text-left lg:text-right pl-12 lg:pl-0 pt-2 lg:pt-8">
        {/* Mobile Dot (Hidden on Desktop) */}
        <div class="absolute left-3 top-4 w-4 h-4 rounded-full border-2 border-[#4285F4] bg-[#101010] lg:hidden z-10"></div>

        <h3 class="text-white font-bold text-xl lg:text-3xl leading-tight">
          {props.session.category}
        </h3>
        <time
          class={`inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white ${badgeColor()}`}
        >
          {props.session.time}
        </time>
      </div>

      {/* Center Column: Timeline & Dot (Desktop Only) */}
      <div class="hidden lg:flex flex-col items-center relative">
        {/* Line */}
        <div
          class={`w-[2.54px] absolute top-0 left-1/2 -translate-x-1/2 ${isLast() ? "h-12" : "h-full"
            }`}
          style="background: radial-gradient(50% 50% at 50% 50%, #1F5FC7 0%, #0F2E61 100%);"
        ></div>
        {/* Dot */}
        <div class="w-4 h-4 rounded-full bg-blue z-10 mt-10 shadow-[0_0_0_4px_rgba(16,16,16,1)]"></div>
      </div>

      {/* Right Column: Card */}
      <div
        class={`relative rounded-2xl p-6 lg:p-8 overflow-hidden text-white transition-transform hover:scale-[1.01] duration-300 ${bgColor()} ${isLast() ? "" : "mb-12"
          } lg:h-[230px] flex flex-col justify-center`}
      >
        {/* Background Pattern */}
        <BoxIcon
          fill="white"
          class="absolute right-0 top-0 bottom-0 h-full opacity-20 pointer-events-none mix-blend-overlay flex items-center justify-end overflow-hidden w-auto"
        />

        <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div class="flex-1">
            <h4 class="text-xl lg:text-3xl font-bold mb-2 leading-tight">
              {props.session.title}
            </h4>
            <Show when={props.session.subtitle}>
              <p class="text-white/90 text-sm lg:text-lg font-medium max-w-xl leading-relaxed whitespace-pre-line">
                {props.session.subtitle}
              </p>
            </Show>
          </div>

          {/* Speaker Images */}
          <Show
            when={props.session.speakers && props.session.speakers.length > 0}
          >
            <div class="flex -space-x-4 shrink-0 mt-4 md:mt-0">
              <For each={props.session.speakers?.filter((item) => item.avatar)}>
                {(speaker) => (
                  <div class="w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white/20 bg-white/10 relative z-0 hover:z-10 transition-all hover:scale-110">
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      class="w-full h-full object-cover scale-120 mt-2"
                      loading="lazy"
                    />
                  </div>
                )}
              </For>
            </div>
          </Show>
        </div>
      </div>
    </div>
  );
}
