export default function Navbar(props) {

  return (
    <>
        <nav className={props.isDark ? 'navbar navbar-expand-lg bg-body-dark bg-dark' : 'navbar navbar-expand-lg bg-body-primary bg-primary'}
                data-bs-theme={props.isDark ? 'dark' : 'light'}>
         <div className="container-fluid">
             <a className="navbar-brand" href="#" >Ahsan's Blogs</a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
                 <li className="nav-item">
                 <a className="nav-link" href="#">{props.writerName}</a>
                 </li>
                 <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Category
                 </a>
                 <ul className="dropdown-menu">
                     <li><a className="dropdown-item" href="#">Nature</a></li>
                     <li><a className="dropdown-item" href="#">Lifestyle</a></li>
                     <li><a className="dropdown-item" href="#">Informational</a></li>
                 </ul>
                 </li>
             </ul>

             <form className="d-flex" role="search">
                 <input className="form-control me-2" type="search" style={props.isDark? {background:'#121212'}: {background:'white'}} placeholder="Search" aria-label="Search"/>
                 <button className={props.isDark? 'btn btn-primary' : `btn btn-light `}   type="submit">Search</button>
             </form>
            <div className="toggle-container">
                <button type='button' className='btn btn-secondary' onClick={props.handleToggle}>{props.isDark? 'Light Mode' :'Dark Mode' }</button>
            </div>
             </div>
         </div>
         </nav>
    </>
  )
}