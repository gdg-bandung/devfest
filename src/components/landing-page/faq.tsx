import { createEffect, createSignal } from "solid-js";
import ArrowRight2 from "../ui/icons/arrow-right-2";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import { FAQ_LIST } from "../../data/faq.data";

export default function FAQ() {
  let splide: any;
  const [activeIndex, setActiveIndex] = createSignal(0);

  createEffect(() => {
    splide = new Splide("#faq-slide", {
      breakpoints: {
        1500: {
          perPage: 2,
        },
        480: {
          perPage: 1,
        },
      },
      perPage: 3,
      autoWidth: true,
      perMove: 1,
      rewind: false,
      gap: "24px",
      trimSpace: false,
      padding: 0,
      arrows: false,
      pagination: false,
      drag: false
    });

    splide.mount();
  });

  const handlePrev = () => {
    const index = splide.index;
    const prevIndex = activeIndex();
    setActiveIndex(prevIndex - 1);
    if (prevIndex <= index) {
      splide.go("<");
    }
  };

  const handleNext = () => {
    const perPage = splide.options.perPage;
    const index = splide.index;
    const prevIndex = activeIndex();
    setActiveIndex(prevIndex + 1);
    if (prevIndex >= index + perPage - 1) {
      splide.go(">");
    }
  };

  const handleCardClick = (newIndex: number) => {
    const perPage = splide.options.perPage;
    const index = splide.index;
    setActiveIndex(newIndex);
    if (newIndex >= index + perPage) {
      splide.go(`+${newIndex - (index + perPage) + 1}`);
    }
  };

  return (
    <section class="py-12 lg:py-15 px-8 lg:px-16 xl:px-[180px] overflow-hidden">
      <div class="container mx-auto">
        <div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <h2 class="font-bold text-[40px] lg:text-5xl leading-14 lg:leading-16">
              Frequently Asked <br />
              <span class="text-blue">Question</span>
            </h2>
            <div>
              <p class="mb-11 lg:text-2xl">
                We've gathered answers to the most popular questions about the
                Devfest 2025 experience.
              </p>
              <div class="flex flex-row gap-2">
                <button
                  disabled={activeIndex() === 0}
                  onClick={handlePrev}
                  class={`w-[56.25px] h-[56.25px] ${
                    activeIndex() === 0 ? "bg-white" : "bg-blue"
                  } rounded-full flex items-center justify-center cursor-pointer disabled:cursor-auto`}
                >
                  {activeIndex() === 0 ? (
                    <ArrowRight2 class="rotate-180 mr-1" fill="black" />
                  ) : (
                    <ArrowRight2 class="rotate-180 mr-1" fill="white" />
                  )}
                </button>
                <button
                  disabled={activeIndex() === FAQ_LIST.length - 1}
                  onClick={handleNext}
                  class={`w-[56.25px] h-[56.25px] ${
                    activeIndex() === FAQ_LIST.length - 1
                      ? "bg-white"
                      : "bg-blue"
                  } rounded-full flex items-center justify-center cursor-pointer disabled:cursor-auto`}
                >
                  {activeIndex() === FAQ_LIST.length - 1 ? (
                    <ArrowRight2 class="ml-1" fill="black" />
                  ) : (
                    <ArrowRight2 class="ml-1" fill="white" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center mt-8 lg:mt-12">
            <div id="faq-slide" class="splide">
              <div class="splide__track">
                <ul class="splide__list">
                  {FAQ_LIST.map((faq, index) => (
                    <li class="splide__slide cursor-pointer">
                      <button
                        onClick={() => handleCardClick(index)}
                        class={`transition-all duration-500 cursor-pointer h-[305px] lg:h-[619px] ${
                          index === activeIndex()
                            ? "w-[288px] lg:w-[628px]"
                            : "w-[288px] md:[140px] lg:w-[305px]"
                        }`}
                      >
                        <div
                          class={`rounded-3xl p-8 h-full flex flex-col gap-3.5 lg:gap-8 shadow-xl transition-colors duration-500 ${
                            index === activeIndex()
                              ? "bg-blue text-white justify-center"
                              : "bg-light-blue text-blue justify-end"
                          }`}
                        >
                          <h3
                            class={`lg:text-[40px] font-bold leading-snug transition-all duration-700 ${
                              index === activeIndex()
                                ? "text-white"
                                : "text-blue"
                            }`}
                          >
                            {faq.question}
                          </h3>
                          <div
                            class={`transition-all duration-700 overflow-hidden ${
                              index === activeIndex()
                                ? "max-h-full opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <p class="text-xs lg:text-2xl  text-white">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
