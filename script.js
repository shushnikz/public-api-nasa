//https://api.nasa.gov/planetary/apod?api_key=ELhYUinNn8W21mGfd3EZ5kHL3dh3cYBkjeDk3ZTe


async function nasaData() {
    try {
        let data = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=20")
        let res = await data.json()

        for (let i = 0; i < res.length; i++) {
            console.log(res[i])
            // let image=res[i].url
            // console.log(image)
            var nasaApod = document.getElementById('nasaApod')
            let nasaData = document.createElement('div')
            nasaData.setAttribute('class', 'col')
            nasaData.innerHTML = `
            
            <div class="card m-3 exp">
                        <img src="${res[i].url}" class="card-img-top image" alt="...">
                        <div class="card-body text-center text">
                            <h5 class="card-title">${res[i].title}</h5>
                            <p class="card-text">Copyright: ${res[i].copyright}</p>
                            <p class="card-text">Date: ${res[i].date}</p>
                            <p class="card-text">Media: ${res[i].media_type}</p>
                        </div>
                        <div class="card card-header explanation">
                            <p>Explanation</p>
                            <p>${res[i].explanation}</p>
                          </div>
                    </div>
            `
            nasaApod.appendChild(nasaData)
        }
    }
    catch (err) {
        console.log(`Error found:$(err)`)
    }
}

nasaData()





