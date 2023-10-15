import chroma from "chroma-js";

const PRIMARY_COLOR = "#e94f37";
const SECONDARY_COLOR = "#393e41";
const TERTIARY_COLOR = "#f6f7eb";

// Primary color
export const PRIMARY_100 = chroma(PRIMARY_COLOR).brighten(2).hex();
export const PRIMARY_200 = chroma(PRIMARY_COLOR).brighten(1.5).hex();
export const PRIMARY_300 = chroma(PRIMARY_COLOR).brighten(1).hex();
export const PRIMARY_400 = chroma(PRIMARY_COLOR).brighten(0.5).hex();
export const PRIMARY_500 = PRIMARY_COLOR; // Original color
export const PRIMARY_600 = chroma(PRIMARY_COLOR).darken(0.2).hex();
export const PRIMARY_700 = chroma(PRIMARY_COLOR).darken(0.4).hex();
export const PRIMARY_800 = chroma(PRIMARY_COLOR).darken(0.6).hex();
export const PRIMARY_900 = chroma(PRIMARY_COLOR).darken(0.8).hex();

// Secondary color
export const SECONDARY_100 = chroma(SECONDARY_COLOR).brighten(3.2).hex();
export const SECONDARY_200 = chroma(SECONDARY_COLOR).brighten(2.4).hex();
export const SECONDARY_300 = chroma(SECONDARY_COLOR).brighten(1.6).hex();
export const SECONDARY_400 = chroma(SECONDARY_COLOR).brighten(0.8).hex();
export const SECONDARY_500 = SECONDARY_COLOR; // Original color
export const SECONDARY_600 = chroma(SECONDARY_COLOR).darken(0.1).hex();
export const SECONDARY_700 = chroma(SECONDARY_COLOR).darken(0.2).hex();
export const SECONDARY_800 = chroma(SECONDARY_COLOR).darken(0.3).hex();
export const SECONDARY_900 = chroma(SECONDARY_COLOR).darken(0.4).hex();

// Tertiary color
export const TERTIARY_100 = chroma(TERTIARY_COLOR).brighten(0.4).hex();
export const TERTIARY_200 = chroma(TERTIARY_COLOR).brighten(0.3).hex();
export const TERTIARY_300 = chroma(TERTIARY_COLOR).brighten(0.2).hex();
export const TERTIARY_400 = chroma(TERTIARY_COLOR).brighten(0.1).hex();
export const TERTIARY_500 = TERTIARY_COLOR; // Original color
export const TERTIARY_600 = chroma(TERTIARY_COLOR).darken(0.2).hex();
export const TERTIARY_700 = chroma(TERTIARY_COLOR).darken(0.4).hex();
export const TERTIARY_800 = chroma(TERTIARY_COLOR).darken(0.6).hex();
export const TERTIARY_900 = chroma(TERTIARY_COLOR).darken(0.8).hex();

// Other colors
export const WHITE = "#ffffff";
export const BLACK = "#000000";
export const WHATSAPPGREEN = "#25d366";
