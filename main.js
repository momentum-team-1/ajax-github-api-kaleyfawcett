let dataSection = document.querySelector("#bio")

fetch('https://api.github.com/users/kaleyfawcett')
    .then (function (response) {
        return response.json()
    })

    .then (function (data) {

        let h1Element = document.createElement ('div')
        h1Element.innerText = `Name: ${data.name}` 
        dataSection.appendChild(h1Element)
        return data.url
        
    }) 

    .then (url => fetch (url))
    .then (response => response.json())
    .then (function (dataPhoto) {

        let photoElement = document.createElement ('div')
        photoElement.innerHTML = `<img src= ${dataPhoto.avatar_url}>`
        dataSection.appendChild(photoElement)
        return dataPhoto.url


    })

    .then (url => fetch (url))
    .then (response => response.json())
    .then (function (gitUser) {

        let gitHubElement = document.createElement ('div')
        gitHubElement.innerHTML = `GitHub URL: ${gitUser.login}`
        dataSection.appendChild(gitHubElement)
        return gitUser.url
    })

    .then (url => fetch (url))
    .then (response => response.json())
    .then (function (company) {

        let companyElement = document.createElement ('div')
        companyElement.innerHTML = `Company: ${company.company}` 
        dataSection.appendChild(companyElement)
        return company.url
    })

    .then (url => fetch (url))
    .then (response => response.json())
    .then (function (website) {

        let websiteElement = document.createElement ('div')
        websiteElement.innerHTML = `Website: ${website.blog}`
        dataSection.appendChild(websiteElement)
        return website.url
    })

