export const SITE = {
  name: 'C Ford Electric',
  legalName: 'C Ford Electric LLC',
  domain: 'cfordelectric.net',
  url: 'https://cfordelectric.net',
  phoneDisplay: '(405) 326-4239',
  phoneHref: 'tel:+14053264239',
  email: '',
  address: {
    street: '6209 SE 74th St',
    city: 'Oklahoma City',
    state: 'OK',
    zip: '73135',
    country: 'United States',
    full: '6209 SE 74th St, Oklahoma City, OK 73135, United States',
  },
  geo: { lat: 35.3922352, lng: -97.4155751 },
  mapsListing: 'https://maps.app.goo.gl/oWpUijijRZ27eyHQ7',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.52500345022!2d-97.4155751!3d35.3922352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b23f0a24793e49%3A0xf067887ebb281b60!2sC%20Ford%20Electric!5e0!3m2!1sen!2sin!4v1794200066222!5m2!1sen!2sin',
  hours: [
    { day: 'Monday', time: '8:00 AM – 5:30 PM' },
    { day: 'Tuesday', time: '8:00 AM – 5:30 PM' },
    { day: 'Wednesday', time: '8:00 AM – 5:30 PM' },
    { day: 'Thursday', time: '8:00 AM – 5:30 PM' },
    { day: 'Friday', time: '8:00 AM – 5:30 PM' },
    { day: 'Saturday', time: 'By appointment' },
    { day: 'Sunday', time: 'Closed' },
  ],
  foundedNote:
    'C Ford Electric LLC is an established Oklahoma electrical contractor serving the Oklahoma City metro area.',
  inc5000: 'C. Ford Electric was named a 2022 Inc. 5000 honoree.',
  tagline: 'Oklahoma City Electrical Contractors',
  description:
    'C Ford Electric LLC is an Oklahoma City electrical contractor providing residential, commercial, and industrial electrical services across the Oklahoma City metro area.',
} as const;

export type NavItem = { label: string; href: string };

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Electrical Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Contact', href: '/contact' },
];
