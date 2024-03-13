const api_url = 'https://api.unsplash.com/photos?page=1&client_id=ifxCq3W0WQAVgvSXd_COp71umx4L878xRVgGYyUa-l8'

const rootDiv = document.getElementById('root')
rootDiv.style.display = 'flex'
rootDiv.style.minHeight = '100vh'
rootDiv.style.padding = "20px"
rootDiv.style.justifyContent = 'center'
rootDiv.style.alignItems = 'center'
rootDiv.style.gap = '20px'
rootDiv.style.flexWrap = 'wrap'
const fetchApi = async () => {
    const response = await fetch(api_url).then((resp) => resp.json())
    const regularUrls = response.map((img) => img.urls.regular)
    for (let url of regularUrls) {
        let imgElement = document.createElement('img')
        imgElement.src = url
        imgElement.alt = "Image"
        imgElement.className = "image"
        imgElement.style.height = '300px'
        imgElement.style.width = '40%'
        rootDiv.appendChild(imgElement)
    }
    console.log(regularUrls)
}
fetchApi()