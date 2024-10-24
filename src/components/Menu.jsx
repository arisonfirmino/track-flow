import {
  LuChevronRight,
  LuGalleryVerticalEnd,
  LuHeart,
  LuListMusic,
  LuMic2,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const Menu = () => {
  const menu_items = [
    { title: "Músicas Curtidas", icon: <LuHeart />, href: "/saved-tracks" },
    { title: "Playlists", icon: <LuListMusic />, href: "/playlists" },
    { title: "Artistas", icon: <LuMic2 />, href: "/artists" },
    { title: "Álbuns", icon: <LuGalleryVerticalEnd />, href: "/albums" },
  ];

  return (
    <nav>
      {menu_items.map((item) => (
        <ul key={item.title}>
          <li className="rounded active:bg-white active:bg-opacity-10">
            <Link
              to={item.href}
              className="relative flex items-center gap-2.5 border-b border-solid border-white border-opacity-10 py-2"
            >
              {item.icon} {item.title}
              <LuChevronRight className="absolute right-0 opacity-10" />
            </Link>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default Menu;
