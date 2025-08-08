import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TextEditorProps {
  content: string;
  onChange: (content: string) => void;
  authorName: string;
  onAuthorChange: (name: string) => void;
}

export const TextEditor = ({ content, onChange, authorName, onAuthorChange }: TextEditorProps) => {
  return (

    <div className="space-y-4">

   
    <Card variant="glass" className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Write Your Content</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            {/* <Label htmlFor="content" className="text-sm font-medium">
              Enter your text content
            </Label> */}
            <Textarea
            maxLength={1000}
              id="content"
              placeholder="Start writing your content here..."
              value={content}
              onChange={(e) => onChange(e.target.value)}
              className="min-h-[320px] resize-none border-0 bg-transparent text-base leading-relaxed focus:ring-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
           <div className="space-y-2 bg-[#F8F8F8] p-[16px] rounded-[8px]">
            <Label htmlFor="author" className="text-sm font-medium pl-3">
              Author name (optional)
            </Label>
            <Input
              id="author"
              placeholder="Enter author name..."
              value={authorName}
              onChange={(e) => onAuthorChange(e.target.value)}
              className="border-0 bg-transparent focus:ring-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
       
        </div>
      </CardContent>
    </Card>
     {/* <Card>
        <CardContent className="flex-1 pt-2">
              <div className="space-y-2">

         <div className="space-y-2">
            <Label htmlFor="author" className="text-sm font-medium pl-3">
              Author name (optional)
            </Label>
            <Input
              id="author"
              placeholder="Enter author name..."
              value={authorName}
              onChange={(e) => onAuthorChange(e.target.value)}
              className="border-0 bg-transparent focus:ring-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
              </div>
        </CardContent>
     </Card> */}
    </div>
  );
};