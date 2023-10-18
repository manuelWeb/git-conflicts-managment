/**
 * @description Helper function to get the src of images
 */
const src = [ ...document.querySelectorAll("img[src*='https://preprod-medias.mariannemelodie.fr/WebArbo/blocs/']") ]
  .reduce((acc, curr) => {
    const chunkSrc = curr.src.split('/')
    acc.push(chunkSrc[ chunkSrc.length - 1 ])
    return acc
  }, [])
