import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export type FontType = "georgia" | "times" | "arial" | "helvetica" | "courier" | "palatino";

interface FontOption {
  id: FontType;
  name: string;
  family: string;
}

const fontOptions: FontOption[] = [
  { id: "georgia", name: "Georgia (Serif)", family: "Georgia, serif" },
  { id: "times", name: "Times New Roman", family: "'Times New Roman', serif" },
  { id: "arial", name: "Arial (Sans-serif)", family: "Arial, sans-serif" },
  { id: "helvetica", name: "Helvetica", family: "'Helvetica Neue', Helvetica, sans-serif" },
  { id: "courier", name: "Courier (Monospace)", family: "'Courier New', monospace" },
  { id: "palatino", name: "Palatino", family: "'Palatino Linotype', serif" },
];

interface FontSelectorProps {
  selectedFont: FontType;
  onFontChange: (font: FontType) => void;
}

export const FontSelector = ({ selectedFont, onFontChange }: FontSelectorProps) => {
  const selectedFontOption = fontOptions.find(font => font.id === selectedFont);

  return (
    <Card variant="glass">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Font Style</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="font-select" className="text-sm font-medium">
            Choose font family
          </Label>
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
      </CardContent>
    </Card>
  );
};

export { fontOptions };