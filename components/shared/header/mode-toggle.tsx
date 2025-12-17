'use client'
import { useTheme } from "next-themes";
import { DropdownMenu, 
   DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"; 
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {

   const { resolvedTheme, setTheme } = useTheme();

   if(!resolvedTheme) {
      return null
   }

   return ( 
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant='ghost' 
               className="focus-visible:ring-0 focus-visible:ring-offset-0">
               {
                  resolvedTheme === 'system' ? (
                     <SunMoon />
                  ) : resolvedTheme === 'dark' ? (
                     <MoonIcon />
                  ) : (
                     <SunIcon />
                  )
               }
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
        
            <DropdownMenuCheckboxItem
               checked={resolvedTheme === 'system'}
               onClick={() => setTheme('system')}
            >
               System
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
               checked={resolvedTheme === 'dark'}
               onClick={() => setTheme('dark')}
            >
               Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
               checked={resolvedTheme === 'light'}
               onClick={() => setTheme('light')}
            >
               Light
            </DropdownMenuCheckboxItem>
         </DropdownMenuContent>
      </DropdownMenu>      
   );
}
 
export default ModeToggle;