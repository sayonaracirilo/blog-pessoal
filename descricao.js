var descricaoElement = document.querySelector('#descricao')
var avatarElement = document.querySelector('.avatar img')
var nomeElement = document.querySelector('#nome')
var emailElement = document.querySelector('#email')

//consumindo a api pública do GitHub para coletar o e-mail, foto do perfil e nome
//usando a bib axios para fazer a requisicao

axios
  .get('https://api.github.com/users/sayonaracirilo', {
    headers: { Authorization: 'token 6991f494cffbf20c595f671b1686eabd2efdbe09' },
  })
  .then(function (response) {
    renderInfo(response.data)
    console.log(response.data)
  })

console.log(response)

function renderInfo(response) {
  console.log(response.avatar_url)
  avatarElement.setAttribute('src', '' + response.avatar_url + '')

  emailElement.innerText = '' + response.email + ''
  nome.innerText = '' + response.name + ''

  console.log(emailElement)
}

renderInfo()
