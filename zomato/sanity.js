import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url/lib/types/builder";

export const client = sanityClient({
    projectId:"vuieh8zb",
    dataset:"production",
    apiVersion:"2023-03-10",
    useCdn:true 
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;