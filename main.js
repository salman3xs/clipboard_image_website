import './style.css'
import Prism from 'prismjs'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <h1>Clipboard Image</h1>
      </div>
      <nav>
        <a href="#features" class="button">Get Started</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h2>Seamless Clipboard Image Handling for Flutter</h2>
      <p>A powerful Flutter plugin that enables easy pasting of images across platforms.</p>
    </div>
  </section>

  <section class="demo">
    <div class="container">
      <h2 class="section-title">See It In Action</h2>
      <p class="section-description">Watch how easily you can paste images from clipboard in your Flutter app</p>
      <div class="demo-container">
        <img src="https://github.com/salman3xs/clipboard_image/blob/main/assets/ios_demo.gif?raw=true" alt="Clipboard Image Demo" class="demo-gif">
      </div>
    </div>
  </section>

  <section class="features" id="features">
    <div class="container">
      <h2 class="section-title">Key Features</h2>
      <p class="section-description">Everything you need for clipboard image operations in your Flutter app</p>
      
      <div class="features-grid">
        <div class="feature-card">
          <img src="https://api.iconify.design/material-symbols:content-paste.svg" alt="Paste Feature">
          <h3>Paste Images</h3>
          <p>Retrieve images from clipboard effortlessly</p>
        </div>
        <div class="feature-card">
          <img src="https://api.iconify.design/material-symbols:devices.svg" alt="Cross-platform">
          <h3>Cross-platform</h3>
          <p>Works seamlessly on iOS and Android platforms</p>
        </div>
      </div>
    </div>
  </section>

  <section class="code-section">
    <div class="container">
      <h2 class="section-title">Usage Examples</h2>
      <p class="section-description">Simple and intuitive API for clipboard operations</p>
      
      <div class="code-block">
        <pre><code class="language-dart">// Paste image from clipboard
final image = await ClipboardImage.paste();
if (image != null) {
  // Use the image
  print('Image size: \${image.width}x\${image.height}');
}</code></pre>
      </div>
    </div>
  </section>

  <section class="installation">
    <div class="container">
      <h2 class="section-title">Installation</h2>
      <p class="section-description">Add clipboard_image to your pubspec.yaml</p>
      
      <div class="code-block">
        <pre><code class="language-yaml">dependencies:
  clipboard_image: ^1.0.0</code></pre>
      </div>
    </div>
  </section>

  <section class="compatibility">
    <div class="container">
      <h2 class="section-title">Platform Compatibility</h2>
      <p class="section-description">Supported platforms and features</p>
      
      <div class="platform-grid">
        <div class="platform-card">
          <h3>iOS</h3>
          <p>✓ Paste</p>
        </div>
        <div class="platform-card">
          <h3>Android</h3>
          <p>✓ Paste</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-links">
        <h3>Documentation</h3>
        <ul>
          <li><a href="#">API Reference</a></li>
          <li><a href="#">Examples</a></li>
          <li><a href="#">Getting Started</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h3>Resources</h3>
        <ul>
          <li><a href="https://github.com/example/clipboard_image">GitHub</a></li>
          <li><a href="https://pub.dev/packages/clipboard_image">pub.dev</a></li>
          <li><a href="#">Changelog</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h3>Community</h3>
        <ul>
          <li><a href="#">Stack Overflow</a></li>
          <li><a href="#">Discord</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
  </footer>
`

// Initialize Prism.js for syntax highlighting
Prism.highlightAll()