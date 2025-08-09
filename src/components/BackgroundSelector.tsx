import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import bgPaper from "@/assets/bg-paper.jpg";
import bgNotebook from "@/assets/bg-notebook.jpg";
import bgBrown from "@/assets/bg-brown.jpg";
import bgCardboard from "@/assets/bg-cardboard.jpg";
import bgNewspaper from "@/assets/bg-newspaper.jpg";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { fontOptions, type FontType } from "./FontSelector";

export type BackgroundType = "paper" | "notebook" | "brown" | "cardboard" | "newspaper";

interface BackgroundOption {
  id: BackgroundType;
  name: string;
  image: string;
}

const backgroundOptions: BackgroundOption[] = [
  { id: "paper", name: "A4 Paper", image: bgPaper },
  // { id: "notebook", name: "Notebook", image: bgNotebook },
  { id: "brown", name: "Kraft Paper", image: bgBrown },
  { id: "cardboard", name: "Cardboard", image: bgCardboard },
  // { id: "newspaper", name: "Newspaper", image: bgNewspaper },
];

interface BackgroundSelectorProps {
  selectedBackground: BackgroundType;
  onBackgroundChange: (background: BackgroundType) => void;
   selectedFont: FontType;
    onFontChange: (font: FontType) => void;
}

export const BackgroundSelector = ({
  selectedBackground,
  onBackgroundChange,
  selectedFont,
  onFontChange
}: BackgroundSelectorProps) => {
  const selectedFontOption = fontOptions.find(font => font.id === selectedFont);
  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Background Style</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* <div className="space-y-4"> */}

        <div className="grid grid-cols-2 gap-3">
          {backgroundOptions.map((option) => (
            <Button
              key={option.id}
              variant="outline"
              className={cn(
                "h-20 p-2 relative overflow-hidden transition-creative",
                selectedBackground === option.id &&
                  "ring-2 ring-primary ring-offset-2 shadow-creative"
              )}
              onClick={() => onBackgroundChange(option.id)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${option.image})` }}
              />
              <span className="relative z-10 font-medium text-sm">
                {option.name}
              </span>
            </Button>
          ))}
        </div>

        {/* <div className="border-0.5 border-solid border-[#808080] w-full h-[0.5px] bg-[#808080]"></div> */}

         <div className="space-y-4  border-t border-solid border-0.5 border-grey-400 pt-4">
          {/* <Label htmlFor="font-select" className="text-sm font-medium">
            Choose font family
          </Label> */}
          <CardTitle className="text-xl font-semibold">Choose font family</CardTitle>
          <Select value={selectedFont} onValueChange={onFontChange}>
            <SelectTrigger id="font-select">
              <SelectValue placeholder="Select font">
                <span style={{ fontFamily: selectedFontOption?.family }}>
                  {selectedFontOption?.name}
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {fontOptions.map((font) => (
                <SelectItem key={font.id} value={font.id}>
                  <span style={{ fontFamily: font.family }}>
                    {font.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* </div> */}
      </CardContent>
    </Card>
  );
};

// export { backgroundOptions };