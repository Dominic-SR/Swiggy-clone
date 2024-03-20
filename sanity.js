import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId:"vuieh8zb",
    dataset:"production",
    apiVersion:"2022-03-07",
    useCdn:true 
})
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;