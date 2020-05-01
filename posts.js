var postElement = document.querySelector('#classPost')
var conteudoElement = document.querySelector('#texto')
var inputElement = document.querySelector('#formulario input')
var textareaElement = document.querySelector('#formulario textarea ')
var buttonElement = document.querySelector('#formulario button')

var exemplos = [
  {
    dataPublicacao: '01 de Maio de 2020',
    titulo: 'Sistemas Legados',
    conteudo:
      'É um sistema antigo que constantemente apresenta bugs, os desenvolvedores sentem dificuldade de fazer manutenção e incrementos. Na verdade, existem diversas definições, mas existe um conjunto de indicadores que devemos analisar, como: Tempo de Vida, utilidade, tecnologias utilizados, dificuldade de manutenção e documentação.',
  },
]
var valorLocal = JSON.parse(localStorage.getItem('list_posts'))
valorLocal.length > 1 ? (posts = JSON.parse(localStorage.getItem('list_posts'))) : (posts = exemplos)

var svgLixeira =
  '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>'

function renderPosts() {
  postElement.innerHTML = ''

  for (post of posts) {
    var postDiv = document.createElement('div')

    var postDivTitulo = document.createElement('div')

    var linkElement = document.createElement('a')

    linkElement.setAttribute('href', '#')

    var pos = posts.indexOf(post)
    linkElement.setAttribute('onclick', 'deletePost(' + pos + ')')

    linkElement.setAttribute('class', 'lixeira')

    linkElement.innerHTML = svgLixeira

    var postTitulo = document.createElement('h2')
    var postText = document.createTextNode(post.titulo)

    var postData = document.createElement('time')
    var postValorData = document.createTextNode(post.dataPublicacao)

    var postConteudo = document.createElement('p')
    var postValorConteudo = document.createTextNode(post.conteudo.replace('\n', '<br/>'))

    postTitulo.appendChild(postText)
    postData.appendChild(postValorData)
    postConteudo.appendChild(postValorConteudo)
    postDiv.appendChild(postConteudo)
    postDiv.appendChild(linkElement)

    postDiv.appendChild(postTitulo)
    postDiv.appendChild(postData)

    console.log(postData)
    postDiv.appendChild(postDivTitulo)
    postDiv.appendChild(postConteudo)

    postDivTitulo.style.padding = '7px 0px 0px 0px'
    postDivTitulo.style.letterSpacing = '-1px'
    postTitulo.style.margin = '0em 0em 0em 0em'

    postData.style.fontSize = '12px'

    postConteudo.style.wordWrap = 'break-word'
    postConteudo.style.textIndent = '35px'

    postDiv.style.position = 'relative'
    postDiv.style.minWidth = '360px'
    postDiv.style.maxWidth = '600px'
    postDiv.style.textAlign = 'justify'
    postDiv.style.padding = '4em 3em'
    postDiv.style.fontFamily = 'sans-serif'
    postDiv.style.marginBottom = '40px'
    postDiv.style.border = '1px solid #e7ebed'
    postDiv.style.borderRadius = '8px'
    postDiv.style.background = '#fff'

    postElement.appendChild(postDiv)
  }
}

renderPosts()

function addPost() {
  console.log('entrou')
  var postArea = textareaElement.value
  var postTitulo = inputElement.value

  data = dataAtualFormatada()
  var post = {
    dataPublicacao: data,
    titulo: postTitulo,
    conteudo: postArea,
  }
  if (postArea !== '' && postTitulo !== '') {
    posts.push(post)
    textareaElement.value = ''
    inputElement.value = ''
    renderPosts()
    salvaStorage()
  }
}

buttonElement.onclick = addPost

function deletePost(pos) {
  console.log(pos)
  posts.pop(pos)
  console.log(posts)
  renderPosts()
  salvaStorage()
}

function dataAtualFormatada() {
  var meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]
  data = new Date()
  var mes = meses[data.getMonth()]
  ;(dia = data.getDate().toString()), (diaF = dia.length == 1 ? '0' + dia : dia), (anoF = data.getFullYear())
  return diaF + ' de ' + mes + ' de ' + anoF
}

function salvaStorage() {
  localStorage.setItem('list_posts', JSON.stringify(posts))
}
