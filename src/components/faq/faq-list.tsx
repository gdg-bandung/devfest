import { createMemo, createSignal } from "solid-js";
import { FAQ_LIST } from "../../data/faq.data";
import Search from "../ui/icons/search";
import ChevronDown from "../ui/icons/chevron-down";

export default function FAQList() {
  const [searchQuery, setSearchQuery] = createSignal("");
  const [expandedIds, setExpandedIds] = createSignal(
    new Set<string>(["faq-1"])
  );

  const filteredFaqs = createMemo(() => {
    if (!searchQuery().trim()) return FAQ_LIST;

    const query = searchQuery().toLowerCase();
    return !searchQuery().trim()
      ? FAQ_LIST
      : FAQ_LIST.filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchQuery().toLowerCase()) ||
            faq?.answer
              ?.toString()
              .toLowerCase()
              .includes(searchQuery().toLowerCase())
        );
  }, [searchQuery()]);

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds());
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  return (
    <section class="pt-32 pb-6 lg:pt-40 lg:pb-14 flex items-center px-8 lg:px-16 xl:px-[180px]">
      <div class="container mx-auto text-center flex flex-col items-center gap-6 z-20">
        <h2 class="text-center text-5xl sm:text-6xl md:text-[64px] lg:text-[80px] font-medium bg-linear-to-r text-white leading-tight">
          Frequently Asked <strong class="text-blue">Questions</strong>
        </h2>
        <p class="text-center text-xl md:text-2xl lg:text-3xl text-white lg:mx-auto leading-relaxed">
          We've gathered answers to the most popular questions about the Devfest
          2025 experience.
        </p>
        <div class="mb-8 w-full max-w-md">
          <div class="relative w-full">
            <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery()}
              onInput={(e) => {
                setSearchQuery(e.target.value);
              }}
              class="w-full pl-12 pr-4 py-3 border border-blue rounded-full text-white placeholder-light-gray focus:outline-none focus:border-soft-blue focus:ring-2 transition"
            />
          </div>
        </div>
        <div class="space-y-4 w-full max-w-7xl">
          {filteredFaqs().map((faq) => (
            <button
              onClick={() => toggleExpand(faq.id)}
              class="w-full text-left transition-all duration-300 cursor-pointer"
            >
              <div
                class={`rounded-3xl p-6 md:p-8 transition-all duration-300 ${
                  expandedIds().has(faq.id)
                    ? "bg-blue text-white shadow-2xl"
                    : "bg-light-blue hover:bg-white text-blue shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Card Title */}
                <div class="flex items-start justify-between gap-4">
                  <h3
                    class={`text-lg md:text-xl font-bold leading-tight flex-1 ${
                      expandedIds().has(faq.id) ? "text-white" : "text-blue"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  {expandedIds().has(faq.id) ? (
                    <ChevronDown
                      class={"w-5 h-5 shrink-0 rotate-180 text-white"}
                    />
                  ) : (
                    <ChevronDown
                      class={"w-5 h-5 shrink-0 text-blue"}
                    />
                  )}
                </div>

                {/* Card Answer (expanded) */}
                {expandedIds().has(faq.id) && (
                  <p class="text-blue-100 text-base leading-relaxed mt-4 animate-in fade-in duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* No results message */}
        {filteredFaqs().length === 0 && (
          <div class="text-center py-16">
            <p class="text-xl text-slate-300 mb-2">
              No FAQs found matching &quot;{searchQuery()}&quot;
            </p>
            <p class="text-slate-400">Try adjusting your search query</p>
          </div>
        )}

        {/* Result count */}
        {searchQuery() && filteredFaqs().length > 0 && (
          <div class="mt-8 text-center text-slate-400 text-sm">
            <p>
              Showing {filteredFaqs().length} of {FAQ_LIST.length} FAQs
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
