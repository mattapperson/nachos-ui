import brandingDefaults from "../branding_defaults";

export const colors = brandingDefaults;

export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: {
        hex: colors[name],
        contrast: 1,
        accessibility: {
          aa: true,
          aaLarge: true,
          aaa: true,
          aaaLarge: true
        }
      }
    }),
    {}
  )
};
