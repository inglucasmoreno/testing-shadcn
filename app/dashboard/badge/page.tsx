import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge> Default </Badge>  
      <Badge variant="destructive"> Destructive </Badge>  
      <Badge variant="outline"> Outline </Badge>  
      <Badge variant="secondary"> Secondary </Badge>
      <Badge capitalize variant="success"> success </Badge>  
      <Badge variant="info"> info </Badge>  
    </div>
  )
}
