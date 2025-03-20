
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  students: number;
  rating: number;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  category,
  level,
  duration,
  students,
  rating,
}: CourseCardProps) => {
  return (
    <Link to={`/courses/${id}`}>
      <Card className="overflow-hidden group h-full transition-all hover:shadow-card hover:-translate-y-1">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-2 right-2">{level}</Badge>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs font-medium">
              {category}
            </Badge>
            <div className="flex items-center text-yellow-500">
              <Star className="h-3.5 w-3.5 fill-current mr-1" />
              <span className="text-xs font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          <h3 className="font-semibold truncate mt-2">{title}</h3>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground pt-0 flex justify-between">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-3.5 w-3.5 mr-1" />
            <span>{students.toLocaleString()} students</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
