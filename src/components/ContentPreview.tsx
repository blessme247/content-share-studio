import { forwardRef, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { backgroundOptions, type BackgroundType } from "./BackgroundSelector";
import { fontOptions, type FontType } from "./FontSelector";
import ShareAndExportMenu from "./DownloadDropdown";

interface ContentPreviewProps {
  content: string;
  background: BackgroundType;
  fontType: FontType;
  authorName: string;
}

export const ContentPreview = forwardRef<HTMLDivElement, ContentPreviewProps>(
  ({ content, background, fontType, authorName }) => {
    const backgroundOption = backgroundOptions.find((bg) => bg.id === background);
    const fontOption = fontOptions.find((font) => font.id === fontType);
      const previewRef = useRef<HTMLDivElement>(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
      <Card variant="glass" className="h-full ">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl ">Preview</CardTitle>
          <ShareAndExportMenu {...{isMenuOpen,setIsMenuOpen, content, previewRef}} />
        </CardHeader>
        <CardContent>
          <div className="relative w-full max-w-lg mx-auto">
            <div
              ref={previewRef}
              className="relative w-full aspect-[4/10] md:aspect-[4/7] rounded-lg overflow-hidden shadow-creative "
              // className="relative w-full min-h-[350px] max-h-max rounded-lg overflow-hidden shadow-creative "
              style={{
                backgroundImage: `url(${backgroundOption?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex-1 flex items-center  justify-center">
                  <div className="w-full h-full overflow-hidden">
                    {content ? (
                      <p
                        className={cn(
                          // "text-lg leading-relaxed whitespace-pre-wrap",
                          "text-[1rem] leading-relaxed whitespace-pre-wrap",
                          background === "paper" && "text-[#000000]",
                          background === "notebook" && "text-blue-900",
                          background === "brown" && "text-amber-900",
                          background === "cardboard" && "text-amber-800",
                          background === "newspaper" && "text-gray-900"
                        )}
                        style={{
                          fontFamily: fontOption?.family || "Georgia, serif",
                          textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                        }}
                      >
                        {content}
                      </p>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500 text-center italic">
                          Your content will appear here
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {authorName && (
                  <div className="flex justify-end ">
                    <p
                      className={cn(
                        "text-sm italic",
                        background === "paper" && "text-gray-600",
                        background === "notebook" && "text-blue-700",
                        background === "brown" && "text-amber-700",
                        background === "cardboard" && "text-amber-600",
                        background === "newspaper" && "text-gray-700"
                      )}
                      style={{
                        fontFamily: fontOption?.family || "Georgia, serif",
                        textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                      }}
                    >
                      — {authorName.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

ContentPreview.displayName = "ContentPreview";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}