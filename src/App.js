
import './Style.css';
import Photo from './imageInSrc.jpg';





function App() {
  return (
<>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">ALA ZRAFI</h1>
    <br />
    <img className="Photo" src={Photo} alt="nature1" />
    <br />
    <img className="Photo" src="/imageInPublic.jpg" alt="nature2" />
  </div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/7sDY4m8KNLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</>

)}

export default App;
