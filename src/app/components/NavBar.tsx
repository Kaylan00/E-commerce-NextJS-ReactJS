import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Cart from "./Cart";
import { useCartStore } from "@/store";

export function NavBar() {

  return (
    <nav className="bg-gray-50 shadow-md text-gray-800 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-lg font-bold cursor-pointer text-green-900">Clothes</span>
          </Link>
        </div>
        <div className="flex items-center gap-9">
          <Cart />
          <div>
            
            <SignedIn>
              <UserButton />
              </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <button className="rounded-md px-4 py-2 text-customGreen font-semibold hover:bg-green-800 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-current">
                    <circle cx="12" cy="7" r="5" fill="none" strokeWidth="2" />
                    <path d="M12 13c-3.86 0-7 1.83-7 4v2h14v-2c0-2.17-3.14-4-7-4z" fill="none" strokeWidth="2" />
                  </svg>
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
