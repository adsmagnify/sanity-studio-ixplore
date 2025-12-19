import {definePlugin} from 'sanity'

// Inject CSS immediately when module loads
if (typeof window !== 'undefined') {
  const injectCSS = () => {
    const existingLink = document.getElementById('ixplore-theme')
    if (!existingLink && document.head) {
      const link = document.createElement('link')
      link.id = 'ixplore-theme'
      link.rel = 'stylesheet'
      link.href = '/theme.css'
      link.onload = () => {
        console.log('✅ Ixplore theme CSS loaded successfully')
        // Force a repaint to ensure styles apply
        document.body.style.display = 'none'
        document.body.offsetHeight // Trigger reflow
        document.body.style.display = ''
      }
      link.onerror = () => {
        console.error('❌ Failed to load Ixplore theme CSS from /theme.css')
        console.log('Trying alternative path...')
        // Try alternative path
        link.href = './theme.css'
      }
      document.head.appendChild(link)
      console.log('📝 Attempting to load Ixplore theme CSS...')
    } else if (existingLink) {
      console.log('✅ Ixplore theme CSS already loaded')
    } else if (!document.head) {
      // Retry if head isn't ready
      setTimeout(injectCSS, 10)
    }
  }

  // Try multiple times to ensure it loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCSS)
  } else {
    injectCSS()
    // Also try after a short delay
    setTimeout(injectCSS, 100)
  }
}

// Plugin to inject theme CSS
export const themePlugin = definePlugin({
  name: 'ixplore-theme',
})

