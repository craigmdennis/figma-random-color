import './ui.css'

document.getElementById('create').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'generate' } }, '*')
}
  
document.getElementById('cancel').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}