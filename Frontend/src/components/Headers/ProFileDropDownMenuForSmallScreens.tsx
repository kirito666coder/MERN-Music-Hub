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

const ProFileDropDownMenuForSmallScreens = () => {
    const {user} = useSelector((state:RootState)=>state.user)
    const {setTheme} = useTheme()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><Profile/></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Hi {user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuLabel className="border-b-1 pt-4 text-md">Theme</DropdownMenuLabel>
                <DropdownMenuItem 
                onClick={()=>{
                    setTheme("light")
                }}
                >Light</DropdownMenuItem>
                <DropdownMenuItem 
                onClick={()=>{
                    setTheme("dark")
                }}
                >Dark</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProFileDropDownMenuForSmallScreens
