import"./Header.css"
export default function Header(title) {
    //props is not a keyword..we can use any other word..just a naming convention
  return (
    <div>
    
    <nav className="Nav">
    
    
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">Nextpage</a>
        </nav>
        <h1>{title}</h1>
    
    </div>

  );
}
