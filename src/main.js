import './index.css'

window.onload = () => {
  const btnOpenMenu = document.querySelector('.btn-open-menu')
  const btnCloseMenu = document.querySelector('.btn-close-menu')
  const menu = document.querySelector('.menu')

  btnOpenMenu.onclick = () => {
    menu.classList.add('open-menu')
  }

  btnCloseMenu.onclick = () => {
    menu.classList.remove('open-menu')
  }

  const menuLinks = document.querySelectorAll('.menu a')
  menuLinks.forEach((_item, index) => {
    menuLinks[index].onclick = (e) => {
      e.preventDefault()
      menu.classList.remove('open-menu')
    }
  })
}
