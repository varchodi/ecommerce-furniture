import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-05-03', 
  token:process.env.NEXT_SANITY_TOKEN!,
})

const node ="cool";
const builder = imageUrlBuilder(client);

export const urlFor = (s:SanityImageSource)=>(builder.image(s))

