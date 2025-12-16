export default function Navbar(props) {

  return (
    <>
        <nav className={props.isDark ? 'navbar navbar-expand-lg bg-body-dark bg-dark fixed-top' : 'navbar navbar-expand-lg bg-body-primary bg-primary fixed-top'}
                data-bs-theme={props.isDark ? 'dark' : 'light'}>
         <div className="container-fluid">
             <a className="navbar-brand" href="#" >Ahsan's Text Editor</a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
            </ul>
            <div className="toggle-container">
                <button type='button' className='btn btn-secondary' onClick={props.handleToggle}>{props.isDark? 'Light Mode' :'Dark Mode' }</button>
            </div>
             </div>
         </div>
         </nav>
    </>
  )
}