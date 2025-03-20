
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FileText, Download, Lock } from "lucide-react";
import { Link } from "react-router-dom";

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  type: "PDF" | "Video" | "Audio" | "Package" | "Gói";
  isPremium: boolean;
  size?: string;
}

const ResourceCard = ({
  id,
  title,
  description,
  type,
  isPremium,
  size,
}: ResourceCardProps) => {
  const getTypeIcon = () => {
    return <FileText className="h-10 w-10 text-primary" />;
  };

  return (
    <Card className="h-full transition-all hover:shadow-card">
      <CardHeader className="relative pb-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="font-semibold line-clamp-1">{title}</h3>
            <Badge
              variant={isPremium ? "default" : "outline"}
              className={`w-fit mt-1 ${
                isPremium ? "bg-primary" : "bg-secondary"
              }`}
            >
              {isPremium ? "Premium" : "Miễn phí"}
            </Badge>
          </div>
          <div className="flex-shrink-0">{getTypeIcon()}</div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        {size && (
          <div className="mt-2 text-xs text-muted-foreground">
            Kích thước: {size}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link to={isPremium ? "/login" : `/resources/${id}`} className="w-full">
          <Button
            variant={isPremium ? "outline" : "default"}
            className="w-full"
          >
            {isPremium ? (
              <>
                <Lock className="mr-2 h-4 w-4" />
                Nâng cấp Premium
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Tải xuống
              </>
            )}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
