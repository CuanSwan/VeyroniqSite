import { FiUser, FiFileText, FiBox, FiCalendar, FiCode, FiSettings, FiBarChart2 } from 'react-icons/fi';

const ICONS = {
  person: FiUser,
  file: FiFileText,
  cube: FiBox,
  calendar: FiCalendar,
  code: FiCode,
  settings: FiSettings,
  chart: FiBarChart2,
};

export default function Icon({ type, size = 28 }) {
  const IconComponent = ICONS[type];
  if (!IconComponent) return null;

  return <IconComponent size={size} />;
}
