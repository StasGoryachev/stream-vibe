import Logo from "@/components/Logo"
import "./Header.scss"
import classNames from "classnames"
import Button from "@/components/Button"
import BurgerButton from "@/components/BurgerButton"

const Header = (props) => {
  const { url } = props
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/movies" },
    { label: "Support", href: "/support" },
    { label: "Subscriptions", href: "/subscriptions" },
  ]

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo />
        <dialog className="header__overlay-menu-dialog">
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={classNames("header__menu-link", {
                      "is-active": href === url,
                    })}
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="search"
            />
            <Button
              className="header__button"
              label="Notifications"
              isLabelHidden
              mode="transparent"
              iconName="notification"
            />
          </div>
        </dialog>
        <BurgerButton className="header__burger-button visible-tablet" />
      </div>
    </header>
  )
}

export default Header
