const title = "My title page"
const style = {color:'red', backgroundColor: '#ededed'}
const hasTitle = true
const todos = [
  'Présenter React JS' ,
  'Présenter JSX' ,
  'Présenter Components' ,
]
function App() {
  // const handleClick = () => {
  //   alert('Hello guys') 
  // }
  return <>
    {/* Pour les style on doit le mettre sous forme d'objet */}
    {/* <h1 id="title" className="title" style={style}>{title}</h1> */}
    {hasTitle && <h1 id="title" className="title" style={style}>{title}</h1>}
    <Paragraph color="gold" id="text" className="text-body">Hello les gens :)</Paragraph>

    <ul>
      {todos.map(todo => (<li>{todo}</li>) )}
    </ul>
  </>
}

// Pour écrire un composant on écrit en capital : 
function Paragraph({color, ...props}) {

  // On peut récupéré tout les Propsriété avec un spride Operator 

  return <p style={{color: color}} {...props}></p>
}

export default App
