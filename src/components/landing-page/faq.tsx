import { createEffect, createSignal } from "solid-js";
import ArrowRight2 from "../ui/icons/arrow-right-2";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

const FAQ_LIST = [
  {
    question: "What is DevFest?",
    answer: (
      <>
        DevFest is a global, community-led tech conference series hosted by
        Google Developer Groups (GDGs). Each DevFest event is crafted by its
        local organizers to fit the needs and interests of the local developer
        community. Think of it as an annual celebration of technology and
        community, happening in cities all over the world
      </>
    ),
  },
  {
    question: "Is DevFest held every year?",
    answer: (
      <>
        Yes, DevFest is an annual tech event for developers which is held in the
        period October - December.
      </>
    ),
  },
  {
    question: "When and where is DevFest Bandung 2025 happening?",
    answer: (
      <>
        The DevFest Bandung 2025 will take place on November 29, 2025, at the
        Maranatha Christian University, Bandung.
      </>
    ),
  },
  {
    question: "Is there a difference between DevFest and DevFest Cloud?",
    answer: (
      <>
        DevFest is organized by GDG and contains general topics related to
        Android, Web, UI/UX, Flutter, Firebase, Cloud, and AI/ML.
        <br />
        Meanwhile, DevFest Cloud is organized by GDG Cloud, whose topics will
        focus on Cloud technology, AI, ML and Data
      </>
    ),
  },
  {
    question: "How do I register for DevFest Bandung 2025?",
    answer: (
      <>
        For registration, you can go directly to the following link: <br />
        <a
          href="https://gdgbandung.com/devfest"
          target="_blank"
          class="font-bold"
          rel="noopener noreferrer"
        >
          https://gdgbandung.com/devfest
        </a>
        <br />
        Important: Please save the registration email containing the barcode to
        show when registering.
      </>
    ),
  },
  {
    question: "Do I need to bring a laptop during activities?",
    answer: (
      <>
        Bringing a laptop is optional. But if you want to take part in our
        workshop session then you have to bring a laptop
      </>
    ),
  },
  {
    question:
      "Am I free to choose the track during the event and can change tracks at will?",
    answer: (
      <>
        You are free to choose the track you want according to your preferences.
        You can move between stages during the event as long as you don't
        disturb other participants and stage capacity is still available.
      </>
    ),
  },
  {
    question: "If I cannot attend, can I give my ticket to someone else?",
    answer: (
      <>
        No, you cannot give your ticket to someone else unless you have a clear
        and original ticket purchasing proof.
      </>
    ),
  },
  {
    question: "May I come late?",
    answer: (
      <>
        We recommend that you <strong class="font-bold">do not arrive late</strong> because you
        will miss many exclusive opportunities from our events.
      </>
    ),
  },
  {
    question: "If I can't attend, will I still get SWAG?",
    answer: <>No, only in-person attendees can get SWAG.</>,
  },
  {
    question: "Will the registration fee be refunded if I cannot attend?",
    answer: <>No, your registration fee will not be refunded.</>,
  },
  {
    question:
      "Where is the event room located from the main gate and parking location?",
    answer: (
      <>
        We will make a video guide regarding the venue location and room plan.
        Stay up-to-date for the information in our Instagram account!
      </>
    ),
  },
  {
    question: "What facilities can participants get?",
    answer: (
      <>
        Participants will get the opportunity to get exclusive door prizes,
        lunch, and cool SWAG.
      </>
    ),
  },
  {
    question: "Will there be on-the-spot tickets?",
    answer: (
      <>
        There will be no on-the-spot tickets. Participants who have not
        registered and have tickets cannot enter the venue and take part in the
        event.
      </>
    ),
  },
  {
    question: "Will the tickets be exchanged for entry wristbands later?",
    answer: (
      <>
        No, there's no ticket exchange, you just need to show the barcode in the
        email after purchasing the ticket.
      </>
    ),
  },
  {
    question: "Can I get the speaker slide?",
    answer: (
      <>
        The speaker's material slides will not be shared with the public, so
        please bring your own media for note-taking.
      </>
    ),
  },
  {
    question:
      "I would love to support the GDG Bandung community, who can I contact?",
    answer: (
      <>
        Feel free to reach out to us at:{" "}
        <a
          href="https://connect.gdgbandung.com"
          target="_blank"
          class="font-bold"
          rel="noopener noreferrer"
        >
          https://connect.gdgbandung.com
        </a>
      </>
    ),
  },
  {
    question: "Who can I contact if I have further questions?",
    answer: (
      <>
        Feel free to reach out to us at:{" "}
        <a
          href="https://connect.gdgbandung.com"
          target="_blank"
          class="font-bold"
          rel="noopener noreferrer"
        >
          https://connect.gdgbandung.com
        </a>
      </>
    ),
  },
];

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
