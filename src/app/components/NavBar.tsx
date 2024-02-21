import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

import { SignInButton } from "@clerk/nextjs";

import Link from "next/link";

import { useCartStore } from "@/store";
import Cart from "./Cart";

export function NavBar() {

  return (
    <nav className="bg-customPurple text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer text-customLightGreen">E-commerce</span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Cart/>
          <div>

            <SignedIn><UserButton /></SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <button className=" rounded-md border-customGreen px-3 py-2">
                  Fazer login
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}