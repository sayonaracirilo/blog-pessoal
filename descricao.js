var descricaoElement = document.querySelector('#descricao')
var avatarElement = document.querySelector('.avatar img')
var nomeElement = document.querySelector('#nome')
var emailElement = document.querySelector('#email')

//consumindo a api pública do GitHub para coletar o e-mail, foto do perfil e nome
//usando a bib axios para fazer a requisicao

axios.get('https://api.github.com/users/sayonaracirilo/events/public').then(function (response) {
  renderInfo(response.data[0])
})

function renderInfo(response) {
  var author = response.payload.commits[0].author

  avatarElement.setAttribute('src', '' + response.actor.avatar_url + '')

  emailElement.innerText = '' + author.email + ''
  nomeElement.innerText = '' + author.name + ''

  console.log(emailElement)
  console.log(nomeElement)
}

renderInfo()
