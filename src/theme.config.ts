export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "寫不過半⋯",
  /** your name */
  author: "天才兒童 1990",
  /** website description */
  desc: "Rediscory the beauty of typography",
  /** your deployed domain */
  website: "https://www.kakid.cc/",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "rss",
      href: "/atom.xml",
    }
  ],
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    {name: "胡适", path: "hu-shi"},
  ]
}

