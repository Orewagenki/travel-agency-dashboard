import {Link, NavLink} from 'react-router';
import {SidebarItems} from "~/constants":

const NavItems = () => {
  return (
      <section className="nav-items">
        <Link to='/' className="link-logo">
          <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]"/>
          <h1>Tourvisto</h1>
        </Link>
        
        <div className="container">
          <nav>
            {sidebarItems.map(({id, href, icon, label}) => (
              <NavLink to={href} key={id}>
                {({isActive} : {isActive: boolean}) => (
                  <div className={}>
                    {label}
                  </div>
                )}
              </NavLink>  
            ))}
          </nav>
        </div>
        </section>
    )
}

export default NavItems
