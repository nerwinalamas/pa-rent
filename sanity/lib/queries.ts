import { defineQuery } from "next-sanity";

export const GET_ALL_LISTINGS =
    defineQuery(`*[_type == "property"] | order(name asc){
      ...,
      "images": images[]{
        "url": asset->url
      },
      "amenities": amenities[]-> {
        title,
      },
      propertyType->{
        title
      },
      contractLength->{
        title
      },
  }`);

export const GET_LISTING_BY_ID =
    defineQuery(`*[_type == "property" && _id == $id][0]{
      ...,
      "images": images[]{
        "url": asset->url
      },
      "amenities": amenities[]-> {
        title,
      },
      propertyType->{
        title
      },
      contractLength->{
        title
      },
      "creatorImage": creatorImage.asset->url,
  }`);
