import { Button } from "@/components/ui/button";
import { PenTool, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
     <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
           <div className="container mx-auto px-4 py-4">
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-creative">
                   <PenTool className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <h1 className="text-2xl font-bold">Content Share Studio</h1>
                   <p className="text-sm text-muted-foreground">Create beautiful content for social media</p>
                 </div>
               </div>
               {/* <Button variant="creative" className="hidden md:flex">
                 <Sparkles className="w-4 h-4" />
                 Made with Lovable
               </Button> */}
               {/* <ThemeToggle/> */}
             </div>
           </div>
         </header>
  )
}

export default Header