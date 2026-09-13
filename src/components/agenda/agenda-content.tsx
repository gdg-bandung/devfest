import { createSignal, For, Show } from "solid-js";
import { listStageAgenda } from "../../data/agenda.data";

export default function AgendaContent() {
  const [selected, setSelected] = createSignal(0);
  const track = () => listStageAgenda[selected()];

  return (
    <section class="agenda-shell">
      <div class="wrap">
        <div class="agenda-tabs" role="tablist" aria-label="DevFest 2026 content tracks">
          <For each={listStageAgenda}>{(item, index) => (
            <button
              class="agenda-tab"
              role="tab"
              aria-selected={selected() === index()}
              aria-controls={`track-panel-${index()}`}
              id={`track-tab-${index()}`}
              onClick={() => setSelected(index())}
            >
              {item.title}<small>{item.audience}</small>
            </button>
          )}</For>
        </div>
        <div class="agenda-intro" id={`track-panel-${selected()}`} role="tabpanel" aria-labelledby={`track-tab-${selected()}`}>
          <div><span class="eyebrow mono">Approved content direction</span><h2 class="section-title">{track().title}</h2><p>{track().description}</p></div>
          <span class="tag">{track().sessions.length} directions · schedule TBC</span>
        </div>
        <div class="session-list">
          <For each={track().sessions}>{(session) => (
            <article class={`session-card ${session.theme}`}>
              <div class="session-time">{session.time ?? "TIME TBC"}</div>
              <div><span class="mono">{session.category} · <span class="status">Direction, not final session</span></span><h3>{session.title}</h3><p>{session.description}</p><div class="tag-row">{session.tags?.map((tag) => <span class="tag">{tag}</span>)}</div></div>
            </article>
          )}</For>
        </div>
        <p class="agenda-note">The source deck defines topic and activity directions, not final titles, speakers, locations, or times. Those fields will be added when confirmed.</p>
      </div>
    </section>
  );
}
