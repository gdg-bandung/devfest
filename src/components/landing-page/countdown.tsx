export default function Countdown() {
  return (
    <div class="flex items-center justify-between lg:justify-center lg:gap-12">
      <CountdownItem label="Days" value={143} />
      <p class="text-3xl font-bold text-white">:</p>
      <CountdownItem label="Hours" value={143} />
      <p class="text-3xl font-bold text-white">:</p>
      <CountdownItem label="Minutes" value={143} />
      <p class="text-3xl font-bold text-white">:</p>
      <CountdownItem label="Seconds" value={143} />
    </div>
  );
}

function CountdownItem({ label, value }: { label: string; value: number }) {
  return (
    <div class="py-1.5 px-3 flex flex-col justify-center items-center gap-[2px] md:gap-1 md:w-[108px] bg-dark-gray rounded-xl md:rounded-2xl">
      <p class="text-lg md:text-2xl font-medium">{value}</p>
      <p class="text-[10px] md:text-sm">{label}</p>
    </div>
  );
}
