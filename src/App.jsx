const title = "My title page"
const style = {color:'red', backgroundColor: '#ededed'}
function App() {
  const handleClick = () => {
    alert('Hello guys') 
  }
  return <>
    {/* Pour les style on doit le mettre sous forme d'objet */}
    <h1 onClick={handleClick} id="title" className="title" style={style}>{title}</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo harum et distinctio, ad minus voluptate odio quasi aut blanditiis minima quam voluptatem dolore laborum exercitationem, excepturi facilis dolores. Est, at?</p>
  </>
}

export default App
