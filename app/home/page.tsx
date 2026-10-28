import { permanentRedirect } from 'next/navigation';

// Old address of the home page
export default function HomeRedirect() {
  permanentRedirect('/');
}
