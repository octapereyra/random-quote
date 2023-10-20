window.onload = () => {
  getQuote()
}

document.querySelector('btn-random').addEventListener('click', () => {
  console.log('hola')
  getQuote()
})

function getQuote() {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const quoteText = document.querySelector('.quote-text')
      const quoteAuthor = document.querySelector('.quote-author')
      const tags = data.tags
      quoteText.textContent = '"' + data.content + '"'
      quoteAuthor.textContent = data.author
      tags.map((tag) => {
        const span = document.createElement('span')
        span.className = 'tag'
        span.textContent = tag
        document.querySelector('.quote-tags').appendChild(span)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
