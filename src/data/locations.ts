export type Location = {
  slug: string;
  city: string;
  state: 'OK';
  /** short descriptor used in prose */
  descriptor: string;
  /** distance/direction from OKC for context */
  context: string;
  /** intro paragraph unique to this location */
  intro: string;
  /** local context paragraph */
  local: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { q: string; a: string }[];
};

export const LOCATIONS: Location[] = [
  {
    slug: 'oklahoma-city-ok',
    city: 'Oklahoma City',
    state: 'OK',
    descriptor: 'the state capital and largest city in Oklahoma',
    context: "Oklahoma City is C Ford Electric's home base and primary service area.",
    intro:
      'C Ford Electric provides electrical services to homeowners and businesses throughout Oklahoma City, Oklahoma. From our location on SE 74th St, we serve neighborhoods across the city — from downtown and Bricktown to the suburbs of south, west, and north Oklahoma City.',
    local:
      'Oklahoma City covers a large geographic area, and its housing stock ranges from pre-1950s homes in the core to new construction on the edges. Older homes often need panel upgrades, grounding updates, and rewiring, while newer homes are more likely to need EV charger circuits, additional outlets, and lighting installations. C Ford Electric handles the full range across the city.',
    metaTitle: 'Electrician Oklahoma City OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'C Ford Electric is an Oklahoma City, OK electrician providing residential and commercial electrical repair, installation, panel upgrades, wiring, and lighting. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve all of Oklahoma City?',
        a: 'Yes. We serve neighborhoods across Oklahoma City, from downtown to the outer suburbs. Call us with your address and we will confirm service availability.',
      },
      {
        q: 'Are you based in Oklahoma City?',
        a: 'Yes. C Ford Electric is located on SE 74th St in Oklahoma City, so we are nearby for most of the metro.',
      },
      {
        q: 'Can you handle both home and business electrical work in OKC?',
        a: 'Yes. We provide residential, commercial, and industrial electrical services throughout Oklahoma City.',
      },
    ],
  },
  {
    slug: 'newcastle-ok',
    city: 'Newcastle',
    state: 'OK',
    descriptor: 'a growing community southwest of Oklahoma City',
    context: 'Newcastle is located about 20 miles southwest of downtown Oklahoma City.',
    intro:
      'C Ford Electric provides electrical services to homes and businesses in Newcastle, Oklahoma. As an electrician serving both Newcastle and Oklahoma City, we handle repairs, installations, panel upgrades, wiring, and lighting for the Newcastle community.',
    local:
      'Newcastle has seen steady residential growth, which means a mix of established homes needing electrical updates and newer construction requiring additions like EV chargers, extra outlets, and lighting. C Ford Electric supports both — from panel and wiring upgrades in older homes to new circuits and fixtures in recently built properties.',
    metaTitle: 'Electrician Newcastle OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrician serving Newcastle, OK. C Ford Electric provides residential and commercial electrical repair, installation, panel upgrades, and wiring. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve Newcastle, OK?',
        a: 'Yes. Newcastle is one of the communities C Ford Electric serves. Call us with your Newcastle address and we will confirm availability.',
      },
      {
        q: 'Can you upgrade electrical panels in Newcastle homes?',
        a: 'Yes. We perform panel upgrades and replacements for homes in Newcastle, including older homes that need more capacity.',
      },
      {
        q: 'Do you handle new construction electrical in Newcastle?',
        a: 'Yes. We provide new construction electrical work for homes being built in the Newcastle area.',
      },
    ],
  },
  {
    slug: 'del-city-ok',
    city: 'Del City',
    state: 'OK',
    descriptor: 'a city directly southeast of Oklahoma City',
    context: 'Del City borders southeast Oklahoma City and is part of the Oklahoma City metro.',
    intro:
      'C Ford Electric provides electrical services to homes and businesses in Del City, Oklahoma. Located just southeast of Oklahoma City, Del City is close to our home base and well within our regular service area.',
    local:
      'Del City has a mix of mid-century homes and newer builds. Many of the older homes in Del City benefit from panel upgrades, additional grounded outlets, and updated lighting, while newer properties often need added circuits for modern appliances and EV chargers. We handle the full range for Del City residents and businesses.',
    metaTitle: 'Electrician Del City OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrician serving Del City, OK. C Ford Electric provides residential and commercial electrical repair, installation, panel upgrades, and wiring. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve Del City?',
        a: 'Yes. Del City is part of our Oklahoma City metro service area. Call us with your Del City address to confirm.',
      },
      {
        q: 'Can you repair outlets and breakers in Del City homes?',
        a: 'Yes. We repair outlets, switches, breakers, and wiring for homes in Del City.',
      },
      {
        q: 'Do you install lighting in Del City?',
        a: 'Yes. We install indoor and outdoor lighting for Del City homes and businesses.',
      },
    ],
  },
  {
    slug: 'midwest-city-ok',
    city: 'Midwest City',
    state: 'OK',
    descriptor: 'a city east of Oklahoma City adjacent to Tinker Air Force Base',
    context: 'Midwest City is located immediately east of Oklahoma City along I-40.',
    intro:
      'C Ford Electric provides electrical services to homes and businesses in Midwest City, Oklahoma. Adjacent to Tinker Air Force Base and just east of Oklahoma City, Midwest City is a regular part of our service area.',
    local:
      'Midwest City has a strong base of post-war and mid-century homes near the base, along with newer construction on the east side. The older homes frequently need panel upgrades, grounded outlet additions, and rewiring work, while newer homes tend to need added capacity for modern loads. C Ford Electric handles both.',
    metaTitle: 'Electrician Midwest City OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrician serving Midwest City, OK. C Ford Electric provides residential and commercial electrical repair, installation, panel upgrades, and wiring. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve Midwest City?',
        a: 'Yes. Midwest City is within our Oklahoma City metro service area. Call us with your Midwest City address to confirm.',
      },
      {
        q: 'Can you upgrade panels in older Midwest City homes?',
        a: 'Yes. We frequently upgrade panels and wiring in the older homes common near Tinker Air Force Base.',
      },
      {
        q: 'Do you do commercial electrical work in Midwest City?',
        a: 'Yes. We provide commercial and industrial electrical services in Midwest City in addition to residential work.',
      },
    ],
  },
  {
    slug: 'moore-ok',
    city: 'Moore',
    state: 'OK',
    descriptor: 'a city directly south of Oklahoma City',
    context: 'Moore is located just south of Oklahoma City along I-35.',
    intro:
      'C Ford Electric provides electrical services to homes and businesses in Moore, Oklahoma. Located directly south of Oklahoma City, Moore is a regular part of our metro service area.',
    local:
      'Moore has experienced significant rebuilding and new construction following past tornado events, alongside established neighborhoods that predate them. We support both — from new construction electrical and added circuits in rebuilt homes to panel and wiring upgrades in older Moore properties.',
    metaTitle: 'Electrician Moore OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrician serving Moore, OK. C Ford Electric provides residential and commercial electrical repair, installation, panel upgrades, and wiring. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve Moore, OK?',
        a: 'Yes. Moore is part of our Oklahoma City metro service area. Call us with your Moore address to confirm.',
      },
      {
        q: 'Can you do electrical work on a rebuilt Moore home?',
        a: 'Yes. We handle new construction electrical and added capacity for rebuilt and newly built homes in Moore.',
      },
      {
        q: 'Do you repair storm-damaged electrical systems in Moore?',
        a: 'Yes. We repair storm-damaged service entrances, panels, and wiring — a service especially relevant in the Moore area.',
      },
    ],
  },
  {
    slug: 'edmond-ok',
    city: 'Edmond',
    state: 'OK',
    descriptor: 'a city north of Oklahoma City known for its residential neighborhoods',
    context: 'Edmond is located approximately 15 miles north of downtown Oklahoma City.',
    intro:
      'C Ford Electric provides electrical services to homes and businesses in Edmond, Oklahoma. Located just north of Oklahoma City, Edmond is part of our regular metro service area and includes a range of established and newer residential properties.',
    local:
      'Edmond includes both established neighborhoods with homes built in the 1970s through 1990s and newer construction on the north and east sides. The older areas commonly need panel upgrades, grounding updates, and additional outlets, while the newer areas frequently need EV charger circuits, lighting installations, and additional capacity for modern appliances.',
    metaTitle: 'Electrician Edmond OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrician serving Edmond, OK. C Ford Electric provides residential and commercial electrical repair, installation, panel upgrades, wiring, and lighting. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve Edmond, OK?',
        a: 'Yes. Edmond is part of our Oklahoma City metro service area. Call us with your Edmond address to confirm availability.',
      },
      {
        q: 'Can you install EV charger circuits in Edmond homes?',
        a: 'Yes. We install dedicated circuits for EV chargers in Edmond homes, including capacity checks on your existing panel.',
      },
      {
        q: 'Do you upgrade panels in older Edmond homes?',
        a: 'Yes. We perform panel upgrades and replacements for Edmond homes that need more capacity or have outdated equipment.',
      },
    ],
  },
  {
    slug: 'norman-ok',
    city: 'Norman',
    state: 'OK',
    descriptor: 'a city south of Oklahoma City and home to the University of Oklahoma',
    context: 'Norman is located about 20 miles south of downtown Oklahoma City along I-35.',
    intro:
      'C Ford Electric provides electrical services to homes and businesses in Norman, Oklahoma. Located south of Oklahoma City and home to the University of Oklahoma, Norman is part of our regular metro service area.',
    local:
      "Norman has a diverse housing stock that ranges from historic homes near the university to newer subdivisions on the city's edges. The older university-area homes often need grounding updates, panel upgrades, and rewiring, while newer construction typically needs added circuits, lighting, and dedicated appliance circuits. C Ford Electric handles the full range.",
    metaTitle: 'Electrician Norman OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrician serving Norman, OK. C Ford Electric provides residential and commercial electrical repair, installation, panel upgrades, wiring, and lighting. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve Norman, OK?',
        a: 'Yes. Norman is part of our Oklahoma City metro service area. Call us with your Norman address to confirm availability.',
      },
      {
        q: 'Can you work on older homes near the university in Norman?',
        a: 'Yes. We handle grounding updates, panel upgrades, and rewiring for older Norman homes near the University of Oklahoma.',
      },
      {
        q: 'Do you do electrical work for Norman rental properties?',
        a: 'Yes. We provide electrical repair and installation services for rental properties in Norman in addition to owner-occupied homes.',
      },
    ],
  },
  {
    slug: 'choctaw-ok',
    city: 'Choctaw',
    state: 'OK',
    descriptor: 'a community east of Oklahoma City in eastern Oklahoma County',
    context: 'Choctaw is located approximately 15 miles east of downtown Oklahoma City.',
    intro:
      'C Ford Electric provides electrical services to homes and businesses in Choctaw, Oklahoma. Located east of Oklahoma City in eastern Oklahoma County, Choctaw is part of our metro service area.',
    local:
      'Choctaw is a primarily residential community with a mix of established homes and newer construction. Properties in the established areas frequently need panel upgrades and additional outlets, while newer builds often require added circuits for modern loads, lighting installations, and exterior work like garages and workshops.',
    metaTitle: 'Electrician Choctaw OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrician serving Choctaw, OK. C Ford Electric provides residential and commercial electrical repair, installation, panel upgrades, and wiring. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve Choctaw, OK?',
        a: 'Yes. Choctaw is part of our Oklahoma City metro service area. Call us with your Choctaw address to confirm availability.',
      },
      {
        q: 'Can you wire garages and workshops in Choctaw?',
        a: 'Yes. We run new circuits, outlets, and lighting for garages, workshops, and accessory structures in Choctaw.',
      },
      {
        q: 'Do you upgrade panels in Choctaw homes?',
        a: 'Yes. We perform panel upgrades and replacements for Choctaw homes that need more capacity or updated equipment.',
      },
    ],
  },
  {
    slug: 'spencer-ok',
    city: 'Spencer',
    state: 'OK',
    descriptor: 'a small city east of Oklahoma City',
    context: 'Spencer is located about 10 miles east-northeast of downtown Oklahoma City.',
    intro:
      'C Ford Electric provides electrical services to homes and businesses in Spencer, Oklahoma. Located east of Oklahoma City, Spencer is part of our regular metro service area.',
    local:
      'Spencer is a smaller, primarily residential community with many mid-century homes. These properties frequently need grounding updates, panel upgrades, and additional outlets to support modern loads. C Ford Electric handles repairs, installations, and upgrades for Spencer residents.',
    metaTitle: 'Electrician Spencer OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrician serving Spencer, OK. C Ford Electric provides residential electrical repair, installation, panel upgrades, and wiring. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve Spencer, OK?',
        a: 'Yes. Spencer is part of our Oklahoma City metro service area. Call us with your Spencer address to confirm availability.',
      },
      {
        q: 'Can you update grounding in older Spencer homes?',
        a: 'Yes. We upgrade grounding systems in older Spencer homes to meet current code and support modern devices.',
      },
      {
        q: 'Do you repair outlets and breakers in Spencer?',
        a: 'Yes. We repair faulty outlets, switches, and breakers for homes in Spencer.',
      },
    ],
  },
  {
    slug: 'yukon-ok',
    city: 'Yukon',
    state: 'OK',
    descriptor: 'a growing city west of Oklahoma City',
    context: 'Yukon is located approximately 15 miles west of downtown Oklahoma City.',
    intro:
      'C Ford Electric provides electrical services to homes and businesses in Yukon, Oklahoma. Located west of Oklahoma City, Yukon is a growing community that is part of our regular metro service area.',
    local:
      'Yukon has experienced significant residential growth, creating a mix of established homes and new construction. The established properties often need panel and wiring upgrades, while newer homes typically need added circuits, lighting installations, and EV charger circuits. C Ford Electric handles both.',
    metaTitle: 'Electrician Yukon OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrician serving Yukon, OK. C Ford Electric provides residential and commercial electrical repair, installation, panel upgrades, and wiring. Call (405) 326-4239.',
    faqs: [
      {
        q: 'Do you serve Yukon, OK?',
        a: 'Yes. Yukon is part of our Oklahoma City metro service area. Call us with your Yukon address to confirm availability.',
      },
      {
        q: 'Can you install lighting in new Yukon homes?',
        a: 'Yes. We install recessed lighting, fixtures, and exterior lighting for new and recently built homes in Yukon.',
      },
      {
        q: 'Do you upgrade panels for Yukon homes?',
        a: 'Yes. We perform panel upgrades and replacements for Yukon homes that need more capacity or updated equipment.',
      },
    ],
  },
];

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function locationSlug(city: string, state = 'OK'): string {
  return `${city.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${state.toLowerCase()}`;
}
