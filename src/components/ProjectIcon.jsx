import { FiUser, FiFileText, FiBox, FiCalendar } from 'react-icons/fi';

const ICONS = {
  person: FiUser,
  file: FiFileText,
  cube: FiBox,
  calendar: FiCalendar,
};

export default function ProjectIcon({ type }) {
  const Icon = ICONS[type];
  if (!Icon) return null;

  return <Icon size={28} />;
}
