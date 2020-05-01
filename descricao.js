var descricaoElement = document.querySelector('#descricao')
var avatarElement = document.querySelector('.avatar img')
var nomeElement = document.querySelector('#nome')
var emailElement = document.querySelector('#email')

//consumindo a api pública do GitHub para coletar o e-mail, foto do perfil e nome
//usando a bib axios para fazer a requisicao

axios
  .get('https://api.github.com/users/sayonaracirilo', {
    headers: { Authorization: 'token d3f04fa741e20d542e1663b47ba7ce0044aeb280' },
  })
  .then(function (response) {
    renderInfo(response.data)
  })

function renderInfo(response) {
  console.log(response.avatar_url)
  avatarElement.setAttribute('src', '' + response.avatar_url + '')

  emailElement.innerText = '' + response.email + ''
  nome.innerText = '' + response.name + ''

  console.log(emailElement)
}

renderInfo()
