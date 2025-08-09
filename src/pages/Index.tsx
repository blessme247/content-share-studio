import { useState, useRef } from "react";
import { TextEditor } from "@/components/TextEditor";
import { BackgroundSelector, type BackgroundType } from "@/components/BackgroundSelector";
import { FontSelector, type FontType } from "@/components/FontSelector";
import { ContentPreview } from "@/components/ContentPreview";
import { ActionPanel } from "@/components/ActionPanel";

import { toast } from "sonner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "@/components/Header";

const Index = () => {
  const [content, setContent] = useState("");
  const [selectedBackground, setSelectedBackground] = useState<BackgroundType>("paper");
  const [selectedFont, setSelectedFont] = useState<FontType>("georgia");
  const [authorName, setAuthorName] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);

  // const handleDownloadPNG = async () => {
  //   if (!previewRef.current || !content.trim()) {
  //     toast.warning("Please add some content first");
  //     return;
  //   }

  //   try {
  //     const canvas = await html2canvas(previewRef.current, {
  //       backgroundColor: null,
  //       scale: 2,
  //       useCORS: true,
  //     });
      
  //     const link = document.createElement("a");
  //     link.download = `canvas-share-${Date.now()}.png`;
  //     link.href = canvas.toDataURL();
  //     link.click();
      
  //     toast.success("PNG downloaded successfully!");
  //   } catch (error) {
  //     console.error("Error generating PNG:", error);
  //     toast.error("Failed to download PNG");
  //   }
  // };

  // const handleDownloadPDF = async () => {
  //   if (!previewRef.current || !content.trim()) {
  //     toast.warning("Please add some content first");
  //     return;
  //   }

  //   try {
  //     const canvas = await html2canvas(previewRef.current, {
  //       backgroundColor: null,
  //       scale: 2,
  //       useCORS: true,
  //     });
      
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF({
  //       orientation: "portrait",
  //       unit: "mm",
  //       format: "a4",
  //     });
      
  //     const imgWidth = 210;
  //     const pageHeight = 295;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     let heightLeft = imgHeight;
      
  //     let position = 0;
      
  //     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;
      
  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }
      
  //     pdf.save(`canvas-share-${Date.now()}.pdf`);
  //     toast.success("PDF downloaded successfully!");
  //   } catch (error) {
  //     console.error("Error generating PDF:", error);
  //     toast.error("Failed to download PDF");
  //   }
  // };

  // const handleShare = () => {
  //   if (!content.trim()) {
  //     toast.warning("Please add some content first");
  //     return;
  //   }

  //   // For now, copy the content to clipboard and show sharing instructions
  //   navigator.clipboard.writeText(content).then(() => {
  //     toast.success("Content copied to clipboard! Download the image and share it on your favorite platform.");
  //   }).catch(() => {
  //     toast.error("Failed to copy content");
  //   });
  // };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 ">
        <div 
        // className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-120px)] " >
        className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-120px)] " >
          {/* Left Panel - Text Editor */}
          <div className="lg:col-span-1 space-y-6">
            <TextEditor 
              content={content} 
              onChange={setContent}
              authorName={authorName}
              onAuthorChange={setAuthorName}
            />
            <BackgroundSelector
              selectedBackground={selectedBackground}
              onBackgroundChange={setSelectedBackground}
              selectedFont={selectedFont}
              onFontChange={setSelectedFont}
            />
            {/* <FontSelector
              selectedFont={selectedFont}
              onFontChange={setSelectedFont}
            /> */}
          </div>

          {/* Center Panel - Preview */}
          <div className="lg:col-span-1">
            <ContentPreview
              // ref={previewRef}
              content={content}
              background={selectedBackground}
              fontType={selectedFont}
              authorName={authorName}
            />
          </div>

          {/* Right Panel - Actions */}
          {/* <div className="lg:col-span-1">
            <ActionPanel
              onDownloadPNG={handleDownloadPNG}
              onDownloadPDF={handleDownloadPDF}
              onShare={handleShare}
            />
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Index;