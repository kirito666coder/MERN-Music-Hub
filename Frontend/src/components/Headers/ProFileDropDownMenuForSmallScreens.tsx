import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Profile from "../MainLayoutComponents/Profile"
import { useTheme } from "@/components/theme-provider"
import { useSelector } from "react-redux"
import type { RootState } from "@/app/store"
import { Link } from "react-router-dom"

const ProFileDropDownMenuForSmallScreens = () => {
    const { user } = useSelector((state: RootState) => state.user)
    const { setTheme } = useTheme()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><Profile /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="flex items-center gap-1">
                    <h1 className="text-lg font-bold bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] bg-clip-text text-transparent hover:brightness-110 transition-all duration-300">
                        hi
                    </h1>
                    {user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to={"/profile"}>
                    <DropdownMenuItem className="cursor-pointer">
                        Profile
                    </DropdownMenuItem>
                </Link>
                <Link to={'settings/editProfile'}>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                </Link>
                <DropdownMenuLabel className="border-b-1 pt-4 text-md">Theme</DropdownMenuLabel>
                <DropdownMenuItem
                className="cursor-pointer"
                    onClick={() => {
                        setTheme("light")
                    }}
                >Light</DropdownMenuItem>
                <DropdownMenuItem
                className="cursor-pointer"
                    onClick={() => {
                        setTheme("dark")
                    }}
                >Dark</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProFileDropDownMenuForSmallScreens
