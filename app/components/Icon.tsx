// Material Symbols (Outlined). app/layout.tsx loads the icon font subset to exactly these
// names, so an icon has to be listed here before it can be used.
export const ICON_NAMES = [
  'account_balance',
  'add',
  'admin_panel_settings',
  'analytics',
  'arrow_back',
  'arrow_forward',
  'arrow_selector_tool',
  'auto_awesome',
  'auto_stories',
  'bar_chart',
  'block',
  'campaign',
  'check',
  'check_circle',
  'chevron_left',
  'chevron_right',
  'circle',
  'close',
  'code_blocks',
  'content_copy',
  'cookie',
  'dark_mode',
  'dashboard',
  'delete',
  'description',
  'download',
  'draw',
  'edit',
  'edit_note',
  'engineering',
  'event',
  'fit_screen',
  'flag',
  'flip_to_back',
  'flip_to_front',
  'folder_zip',
  'group',
  'handshake',
  'help',
  'history',
  'history_edu',
  'layers',
  'light_mode',
  'lightbulb',
  'link',
  'list_alt',
  'lock',
  'lock_open',
  'login',
  'logout',
  'medication',
  'menu_book',
  'newspaper',
  'open_in_new',
  'pan_tool',
  'precision_manufacturing',
  'quiz',
  'rectangle',
  'redo',
  'remove',
  'schedule',
  'schedule_send',
  'school',
  'science',
  'search',
  'share',
  'shield',
  'smart_display',
  'star',
  'sticky_note_2',
  'support_agent',
  'tag',
  'terminal',
  'title',
  'toc',
  'toll',
  'undo',
  'upload_file',
  'visibility',
  'warning',
  'wifi_off',
  'workspace_premium',
] as const;

export type IconName = (typeof ICON_NAMES)[number];

// Google Fonts wants icon_names sorted alphabetically
export const ICON_FONT_URL = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0..1,0&icon_names=${[...ICON_NAMES].sort().join(',')}&display=block`;

interface IconProps {
  name: IconName;
  size?: number;
  filled?: boolean;
  className?: string;
}

export default function Icon({ name, size = 20, filled = false, className = '' }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined shrink-0 select-none ${className}`}
      style={{ fontSize: size, fontVariationSettings: `'FILL' ${filled ? 1 : 0}` }}
    >
      {name}
    </span>
  );
}
