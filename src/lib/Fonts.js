const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Nunito:300i,400'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const nunito = new FontFaceObserver('Nunito')

  nunito.load().then(() => {
    document.documentElement.classList.add('nunito')
  })
}

export default Fonts
