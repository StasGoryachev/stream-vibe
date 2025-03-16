import "./Footer.scss"

const Footer = () => {
  const menuItems = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
      title: "Movies",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Popular",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Support",
      links: ["Contact Us"],
    },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
    },
    {
      title: "Connect With Us",
      socialLinks: [
        {
          label: "Facebook",
          iconName: "facebook",
        },
        {
          label: "Twitter",
          iconName: "twitter",
        },
        {
          label: "LinkedIn",
          iconName: "linked-in",
        },
      ],
    },
  ]

  const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
  
        </nav>
        <div className="footer__extra"></div>
      </div>
    </footer>
  )
}

export default Footer
