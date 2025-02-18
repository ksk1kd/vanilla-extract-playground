import { Paragraph } from './components/Paragraph/Paragraph'
import { link, subtitle, title } from './styles.css'

function App() {
  return (
    <>
      <div className="container">
        <h1 className={title}>Vanilla Extract Playground</h1>
        <h2 className={subtitle}>Sub Title</h2>
        <p>
          <a className={link} href="/">
            Sample Link
          </a>
        </p>
        <Paragraph fontSize="medium">
          This is a paragraph component with some text.
        </Paragraph>
      </div>
    </>
  )
}

export default App
