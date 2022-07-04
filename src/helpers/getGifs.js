export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xz3EQne2T8LdXx3n73WKXrBmASfqmNMw&q=${category}&limit=20`;

    const resp = await fetch (url);

    const { data = [] } = await resp.json();

    const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
    return gifs;
}