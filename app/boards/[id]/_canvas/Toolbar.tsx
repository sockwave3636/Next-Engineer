'use client';

import Icon, { IconName } from '@/app/components/Icon';
import { CanvasMode, CanvasState, InsertableLayer, LayerType } from '@/lib/boards/types';

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (state: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const SELECT_MODES = [CanvasMode.None, CanvasMode.Pressing, CanvasMode.SelectionNet, CanvasMode.Translating, CanvasMode.Resizing];

const INSERT_TOOLS: { label: string; icon: IconName; layerType: InsertableLayer }[] = [
  { label: 'Text', icon: 'title', layerType: LayerType.Text },
  { label: 'Sticky note', icon: 'sticky_note_2', layerType: LayerType.Note },
  { label: 'Rectangle', icon: 'rectangle', layerType: LayerType.Rectangle },
  { label: 'Ellipse', icon: 'circle', layerType: LayerType.Ellipse },
];

// Tools down the left edge: select, move the view, add shapes and text, pen, undo and redo
export default function Toolbar({ canvasState, setCanvasState, undo, redo, canUndo, canRedo }: ToolbarProps) {
  const mode = canvasState.mode;
  return (
    <div className="absolute left-2 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3" onPointerDown={(e) => e.stopPropagation()}>
      <div className="flex flex-col gap-1 rounded-xl border border-line bg-surface p-1.5 shadow-lift" role="toolbar" aria-label="Drawing tools" data-tour="tools">
        <ToolButton tour="select" label="Select (Esc)" icon="arrow_selector_tool" active={SELECT_MODES.includes(mode)} onClick={() => setCanvasState({ mode: CanvasMode.None })} />
        <ToolButton tour="hand" label="Move the view" icon="pan_tool" active={mode === CanvasMode.Hand} onClick={() => setCanvasState({ mode: CanvasMode.Hand })} />
        {INSERT_TOOLS.map((tool) => (
          <ToolButton
            key={tool.label}
            label={tool.label}
            icon={tool.icon}
            active={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === tool.layerType}
            onClick={() => setCanvasState({ mode: CanvasMode.Inserting, layerType: tool.layerType })}
          />
        ))}
        <ToolButton label="Pen" icon="draw" active={mode === CanvasMode.Pencil} onClick={() => setCanvasState({ mode: CanvasMode.Pencil })} />
      </div>
      <div className="flex flex-col gap-1 rounded-xl border border-line bg-surface p-1.5 shadow-lift" data-tour="undo">
        <ToolButton label="Undo (Ctrl+Z)" icon="undo" disabled={!canUndo} onClick={undo} />
        <ToolButton label="Redo (Ctrl+Shift+Z)" icon="redo" disabled={!canRedo} onClick={redo} />
      </div>
    </div>
  );
}

function ToolButton({ label, icon, onClick, active = false, disabled = false, tour }: { label: string; icon: IconName; onClick: () => void; active?: boolean; disabled?: boolean; tour?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      aria-pressed={active}
      data-tour={tour}
      className={`grid h-10 w-10 place-items-center rounded-lg transition disabled:opacity-35 ${
        active ? 'bg-brand text-on-brand' : 'text-ink hover:bg-surface-muted'
      }`}
    >
      <Icon name={icon} size={22} />
    </button>
  );
}
