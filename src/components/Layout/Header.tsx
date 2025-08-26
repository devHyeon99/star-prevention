import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

const Header = () => {
  const navLinks = [
    { href: '/company', label: '회사소개' },
    { href: '/farmcare', label: '농장관리' },
    { href: '/consulting', label: '컨설팅' },
    { href: '/gallery', label: '방역사진' },
    { href: '/reservation', label: '예약방법' },
  ];

  const Logo = () => {
    return (
      <Link href='/' className='p-4' aria-label='스타방역공사 홈페이지로 이동'>
        <div className='relative w-[180px] h-[40px] md:w-[250px] md:h-[40px]'>
          <Image
            src='/logo.png'
            alt='스타방역공사'
            fill
            className='object-contain'
            sizes='(max-width: 768px) 100vw, 250px'
            priority
          />
        </div>
      </Link>
    );
  };

  const PcNav = () => (
    <nav aria-label='메인 메뉴' className='text-lg font-medium'>
      <ul className='flex items-center'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className='px-4 py-2 transition-colors hover:text-foreground/80 text-foreground/60'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  const MbNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='mx-2'>
          <Menu className='size-8' aria-hidden='true' />
          <span className='sr-only'>메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
        <SheetTitle className='sr-only'>모바일 메뉴</SheetTitle>
        <SheetDescription className='sr-only'>
          사이트의 주요 페이지로 이동할 수 있는 메뉴입니다.
        </SheetDescription>
        <nav aria-label='모바일 메뉴' className='mt-8'>
          <ul className='flex flex-col space-y-4'>
            {navLinks.map((link, index) => (
              <li key={`${link.href}-${index}`} className='w-full'>
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    className='block w-full text-lg font-medium text-center py-3 px-4 text-muted-foreground hover:text-foreground border-b border-border last:border-b-0 transition-colors'
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className='flex items-center justify-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container h-20 md:h-24 flex justify-center items-center w-full max-w-[1536px]'>
        {/* --- PC용 뷰 (md 사이즈 이상) --- */}
        <div className='hidden md:flex w-full justify-between items-center'>
          <Logo />
          <PcNav />
        </div>

        {/* --- 모바일용 뷰 (md 사이즈 미만) --- */}
        <div className='md:hidden flex w-full justify-between items-center'>
          <Logo />
          <MbNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
