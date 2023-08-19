import { Navbar, NavbarBrand, NextUIProvider } from '@nextui-org/react';

export default function Header() {
    return (
        <NextUIProvider>
            <Navbar>
                <NavbarBrand className="gap-3">
                    <img src="../../../public/assets/logo.png" className="w-6 h-6 rounded-full border-[1.5px] border-violet-400" alt="ForDevs" />
                    <p>ForDevs</p>
                </NavbarBrand>
            </Navbar>
        </NextUIProvider>
    );
}

