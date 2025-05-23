
import { Book, Sunset, Trees, Zap } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

const DropdownMenuOnly = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Features",
      url: "#",
      items: [
        {
          title: "Analytics",
          description: "Get detailed insights into your business performance",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/analytics",
        },
        {
          title: "Automation",
          description: "Streamline your workflow with powerful automation tools",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/automation",
        },
      ],
    },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "/blog",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/company",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/help",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/contact",
        },
      ],
    },
  ];

  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[400px] bg-popover border shadow-lg">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href={subItem.url}
                    >
                      <div className="flex items-center gap-3">
                        {subItem.icon}
                        <div>
                          <div className="text-sm font-medium leading-none">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {subItem.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }
    return null;
  };

  return (
    <NavigationMenu className="relative z-[1000]">
      <NavigationMenuList className="flex space-x-1">
        {menuItems.map((item) => renderMenuItem(item))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { DropdownMenuOnly };
