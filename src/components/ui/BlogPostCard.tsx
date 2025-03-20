
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  commentCount: number;
}

const BlogPostCard = ({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  commentCount,
}: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <Card className="overflow-hidden group h-full transition-all hover:shadow-card hover:-translate-y-1">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <h3 className="font-semibold line-clamp-2">{title}</h3>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground">{author.name}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">{date}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">{commentCount}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
