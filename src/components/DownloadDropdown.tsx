"use client"
import { FileText, FolderUp, Image, Share2, } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { CardTitle } from "./ui/card";
// import { useUser } from "@/lib/auth";

import { toast } from "sonner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

  type Props = {
    isMenuOpen?: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
     previewRef: React.MutableRefObject<HTMLDivElement>
     content: string
  }

const ShareAndExportMenu = ({isMenuOpen, setIsMenuOpen, previewRef, content}: Props) => {

    // const {user} = useUser()

     const handleDownloadPNG = async () => {
    if (!previewRef.current || !content.trim()) {
      toast.warning("Please add some content first");
      return;
    }

    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });
      
      const link = document.createElement("a");
      link.download = `canvas-share-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      toast.success("PNG downloaded successfully!");
    } catch (error) {
      console.error("Error generating PNG:", error);
      toast.error("Failed to download PNG");
    }
  };

  const handleDownloadPDF = async () => {
    if (!previewRef.current || !content.trim()) {
      toast.warning("Please add some content first");
      return;
    }

    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`canvas-share-${Date.now()}.pdf`);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to download PDF");
    }
  };

  const handleShare = () => {
    if (!content.trim()) {
      toast.warning("Please add some content first");
      return;
    }

    // For now, copy the content to clipboard and show sharing instructions
    navigator.clipboard.writeText(content).then(() => {
      toast.success("Content copied to clipboard! Download the image and share it on your favorite platform.");
    }).catch(() => {
      toast.error("Failed to copy content");
    });
  };
  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <DropdownMenuTrigger asChild>
         
                       <CardTitle className="text-[16px] font-[500] flex items-center gap-2 cursor-pointer">
          <FolderUp  className="w-4 h-4" />
           Export
        </CardTitle>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className={cn("flex flex-col gap-1 bg-[#fff] p-[6px] ")}
                    >
                      <DropdownMenuItem className="cursor-pointer p-0 ">
                       <Button variant={"custom"} size={"custom"} onClick={handleDownloadPNG} >
                          <Image className="w-4 h-4" />
          Download PNG
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer p-0 ">
                       <Button variant={"custom"} size={"custom"} onClick={handleDownloadPDF}  >
                           <FileText className="w-4 h-4" />
          Download PDF
                        </Button>
                      </DropdownMenuItem>
                 
                    </DropdownMenuContent>
                  </DropdownMenu>
  )
}

export default ShareAndExportMenu