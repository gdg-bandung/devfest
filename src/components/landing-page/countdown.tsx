import { createSignal, createEffect } from "solid-js";
import { PUBLIC_END_COUNTDOWN } from "astro:env/client";

const targetDate = new Date(PUBLIC_END_COUNTDOWN)

export default function Countdown() {
  const [timeLeft, setTimeLeft] = createSignal({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  let interval: NodeJS.Timeout;

  const updateCountdown = () => {
    const now = new Date();
    const diff = (targetDate.getTime() - now.getTime()) as number;
    if (diff <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      if (interval) {
        clearInterval(interval);
      }
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  };

  createEffect(() => {
    interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div class="flex items-center justify-between lg:justify-center lg:gap-12">
      <CountdownItem label="Days" value={timeLeft().days} />
      <p class="text-3xl font-bold text-white">:</p>
      <CountdownItem label="Hours" value={timeLeft().hours} />
      <p class="text-3xl font-bold text-white">:</p>
      <CountdownItem label="Minutes" value={timeLeft().minutes} />
      <p class="text-3xl font-bold text-white">:</p>
      <CountdownItem label="Seconds" value={timeLeft().seconds} />
    </div>
  );
}

function CountdownItem(props: { label: string; value: number }) {
  return (
    <div class="py-1.5 px-3 md:py-3 flex flex-col justify-center items-center gap-[2px] md:gap-1 md:w-[108px] bg-dark-gray rounded-xl md:rounded-2xl">
      <p class="text-lg md:text-2xl font-medium">{props.value}</p>
      <p class="text-[10px] md:text-sm">{props.label}</p>
    </div>
  );
}
