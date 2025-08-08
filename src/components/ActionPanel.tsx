import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Share2, FileText, Image } from "lucide-react";
import { toast } from "sonner";

interface ActionPanelProps {
  onDownloadPNG: () => void;
  onDownloadPDF: () => void;
  onShare: () => void;
}

export const ActionPanel = ({
  onDownloadPNG,
  onDownloadPDF,
  onShare,
}: ActionPanelProps) => {
  return (
    <Card variant="warm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Share2 className="w-5 h-5" />
          Share & Export
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          onClick={onDownloadPNG}
          variant="default"
          size="lg"
          className="w-full"
        >
          <Image className="w-4 h-4" />
          Download PNG
        </Button>
        
        <Button
          onClick={onDownloadPDF}
          variant="outline"
          size="lg"
          className="w-full"
        >
          <FileText className="w-4 h-4" />
          Download PDF
        </Button>
        
        <Button
          onClick={onShare}
          variant="hero"
          size="lg"
          className="w-full"
        >
          <Share2 className="w-4 h-4" />
          Share to Social Media
        </Button>
      </CardContent>
    </Card>
  );
};