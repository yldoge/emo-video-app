import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '1it67s0t',
  dataset: 'production',
  apiVersion: '2022-09-19',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
