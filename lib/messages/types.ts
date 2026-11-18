// The drop-down message: a longer note from the team (title, text, optional button) that slides
// down below the header. Owners write it in the admin panel (settings/dropdownMessage). Each
// saved change gets a new id, so it shows again to everyone: once for signed-in students, and on
// every new visit for visitors who aren't signed in.
export type Audience = 'everyone' | 'signedIn' | 'visitors';

export interface DropdownMessage {
  id: string;
  on: boolean;
  title: string;
  text: string;
  // Optional button, such as "Share a file" -> "/contribute"
  buttonLabel: string;
  buttonHref: string;
  audience: Audience;
}

export const AUDIENCES: { id: Audience; label: string }[] = [
  { id: 'everyone', label: 'Everyone' },
  { id: 'signedIn', label: 'Only signed-in students' },
  { id: 'visitors', label: 'Only visitors who aren’t signed in' },
];

export const DROPDOWN_TITLE_MAX = 80;
export const DROPDOWN_TEXT_MAX = 400;
export const DROPDOWN_LABEL_MAX = 30;

// What shows until an owner saves their first message
export const DEFAULT_DROPDOWN: DropdownMessage = {
  id: 'default1',
  on: true,
  title: 'A request from our team',
  text: 'Please share only original AKTU papers and your own notes, never fake, edited or copied files. Other students revise from what you share. Our team is also finding notes and papers for more subjects and adding them as soon as we can.',
  buttonLabel: 'Share a file',
  buttonHref: '/contribute',
  audience: 'everyone',
};

// Per browser: the id of the last message a signed-in student closed (per account), and of the
// one a visitor closed during this visit
export const SEEN_KEY = (uid: string) => `dropdown-seen:${uid}`;
export const VISIT_KEY = 'dropdown-closed';
