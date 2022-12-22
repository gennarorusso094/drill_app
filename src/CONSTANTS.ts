/* eslint-disable prettier/prettier */
const token = "9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

//API-s URLs
export const REGIONS_URL = `https://apiv3.iucnredlist.org/api/v3/region/list?token=${token}`;

export const SPECIES_IN_REGION = [
    `https://apiv3.iucnredlist.org/api/v3/species/region/`,
    `/page/0?token=${token}`,
];

export const CRITICAL_ENGAGED_IN_REGION = [
    `https://apiv3.iucnredlist.org/api/v3/threats/species/name/`,
    `/region/`,
    `/?token=${token}`,
];
