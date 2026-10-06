// Mofid-style line icons - consistent stroke, rounded, minimal

const Icon = ({ children, className = 'w-6 h-6', strokeWidth = 1.8 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    stroke="currentColor"
    className={className}
  >
    {children}
  </svg>
)

export const IconAnnouncement = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.5a2.5 2.5 0 01-5 0v-8.736a2.5 2.5 0 01.604-1.648l3.382-3.948A2.5 2.5 0 0113 6.088v.01M7 19.5h10M11 19.5v-5a2.5 2.5 0 015 0v5M16 19.5h2a2 2 0 002-2v-2.5a2 2 0 00-2-2h-2" />
  </Icon>
)

export const IconCalendar = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0V9.75m18 8.75V9.75M3 9.75h18M8.25 12.75h.008v.008H8.25v-.008zM11.25 12.75h.008v.008h-.008v-.008zM14.25 12.75h.008v.008h-.008v-.008z" />
  </Icon>
)

export const IconSystems = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </Icon>
)

export const IconPhone = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </Icon>
)

export const IconFamily = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.2a3 3 0 100-6.4m0 6.4A2.99 2.99 0 0115 18.72M6.75 15.75a3 3 0 11-6 0 3 3 0 016 0zm0 0h.008v.008H6.75v-.008zm10.5 0a3 3 0 11-6 0 3 3 0 016 0zm0 0h.008v.008h-.008v-.008z" />
  </Icon>
)

export const IconQuestion = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </Icon>
)

export const IconDiamond = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25l4.5-4.5h10.5l4.5 4.5-9.75 9.75L2.25 8.25z" />
  </Icon>
)

export const IconBook = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.298 0 4.367.852 6 2.25m0-14.208A8.967 8.967 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.298 0-4.367.852-6 2.25m0-14.208v14.208" />
  </Icon>
)

export const IconLeaf = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9c0-4.97-4.03-9-9-9-4.97 0-9 4.03-9 9a9 9 0 009 9zM12 21c0-4.97 4.03-9 9-9M12 21c0-4.97-4.03-9-9-9M12 21V3" />
  </Icon>
)

export const IconUser = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
  </Icon>
)

export const IconArrowLeft = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </Icon>
)

export const IconArrowUpLeft = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5L16.5 16.5M7.5 7.5h7.5M7.5 7.5v7.5" />
  </Icon>
)

export const IconSearch = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </Icon>
)

export const IconMenu = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </Icon>
)

export const IconClose = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </Icon>
)

export const IconPlay = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </Icon>
)

export const IconChevronDown = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </Icon>
)

export const IconPlus = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </Icon>
)

export const IconMail = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.911l-7.5 4.343a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.911V6.75" />
  </Icon>
)

export const IconLocation = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </Icon>
)

export const iconMap = {
  announcement: IconAnnouncement,
  calendar: IconCalendar,
  systems: IconSystems,
  phone: IconPhone,
  family: IconFamily,
  question: IconQuestion,
  diamond: IconDiamond,
  book: IconBook,
  leaf: IconLeaf,
  user: IconUser,
}
