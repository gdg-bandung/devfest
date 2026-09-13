import { createSignal, onCleanup, onMount } from "solid-js";
import { EVENT } from "../../data/event.data";

const targetDate = new Date(`${EVENT.dateISO}T08:00:00+07:00`);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = createSignal({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  let interval: ReturnType<typeof setInterval> | undefined;

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

  onMount(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });
  onCleanup(() => interval && clearInterval(interval));

  return (
    <div class="countdown" role="timer" aria-label="Countdown to DevFest Bandung 2026">
      <CountdownItem label="Days" value={timeLeft().days} color="blue" />
      <span class="countdown-separator" aria-hidden="true">:</span>
      <CountdownItem label="Hours" value={timeLeft().hours} color="red" />
      <span class="countdown-separator" aria-hidden="true">:</span>
      <CountdownItem label="Minutes" value={timeLeft().minutes} color="yellow" />
      <span class="countdown-separator" aria-hidden="true">:</span>
      <CountdownItem label="Seconds" value={timeLeft().seconds} color="green" />
    </div>
  );
}

function CountdownItem(props: { label: string; value: number, color: string }) {
  return (
    <div class={`countdown-item ${props.color}`}>
      <p class="countdown-value">{String(props.value).padStart(2, "0")}</p>
      <p class="countdown-label">{props.label}</p>
    </div>
  );
}
