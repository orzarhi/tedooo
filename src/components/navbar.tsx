import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Bell, Home, Menu, MessageCircle, X } from 'lucide-react';
import { ReactNode, useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-[#07B4AF]">Logo</span>
            </div>
            <div className="hidden lg:block ml-10">
              <Input type="search" placeholder="Search..." className="w-64" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <NavItem icon={<Home className="size-5" />} label="Home" active />
              <NavItem icon={<MessageCircle className="size-5" />} label="Messaging" />
              <NavItem icon={<Bell className="size-5" />} label="Notifications" />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block size-6" aria-hidden="true" />
              ) : (
                <Menu className="block size-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem icon={<Home className="size-5" />} label="Home" mobile />
            <NavItem
              icon={<MessageCircle className="size-5" />}
              label="Messaging"
              mobile
            />
            <NavItem icon={<Bell className="size-5" />} label="Notifications" mobile />
          </div>
          <div className="pt-4 pb-3">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-muted-foreground">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-none text-zinc-400">
                  tom@example.com
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({
  icon,
  label,
  active = false,
  mobile = false,
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
  mobile?: boolean;
}) => {
  return (
    <div className="relative  px-3 py-2">
      <a
        href="#"
        className={cn('flex items-center relative', {
          'text-muted-foreground rounded-md text-base font-medium': mobile,
          'rounded-md text-sm font-medium text-muted-foreground': !mobile,
          'text-[#07B4AF]':  active,
        })}
      >
        {icon}
        <span className={cn('', { 'ml-3': mobile, 'ml-2': !mobile })}>{label}</span>
      </a>
      
      <span
        className={cn(
          'absolute -bottom-4 left-1 w-full h-[2.5px] rounded-full bg-[#07B4AF]',
          {
            'transform translate-x-0': active,
            'hidden': !active,
          }
        )}
      ></span>
    </div>
  );
};