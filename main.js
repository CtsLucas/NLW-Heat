const LinksSocialMedia = {
  github: 'CtsLucas',
  linkedin:
    'in/luucas-cts' /* No link do linkedin é necessário colocar o in/ para funcionar */,
  facebook: 'cts.lucas',
  instagram: 'luucas_cts',
  twitter: 'luucasCts'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}/`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
