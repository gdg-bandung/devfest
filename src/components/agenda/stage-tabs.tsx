import { listStageAgenda } from "../../data/agenda.data";

interface StageTabsProps {
    selectedStageIndex: () => number;
    setSelectedStageIndex: (index: number) => void;
}

export default function StageTabs(props: StageTabsProps) {
    return (
        <ul class="py-4 px-6 lg:py-6 lg:px-9 border-4 border-gray rounded-3xl flex flex-row gap-3 overflow-x-auto scrollbar-hide">
            {listStageAgenda.map((stageAgenda, index) => (
                <li class="shrink-0">
                    <button
                        onClick={() => props.setSelectedStageIndex(index)}
                        class={`px-4 py-2 lg:px-6 lg:py-4 cursor-pointer rounded-2xl font-bold text-sm md:text-base lg:text-2xl transition-all duration-300 whitespace-nowrap ${props.selectedStageIndex() === index
                                ? "bg-blue text-white "
                                : "bg-transparent text-white"
                            }`}
                    >
                        {stageAgenda.title}
                    </button>
                </li>
            ))}
        </ul>
    );
}
