import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  AvatarFallback,
  ChartPie
} from '@/components';

export const OwnerCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className={'flex gap-5'}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className={'flex'}>
        <ChartPie/>
        <ChartPie/>
        <ChartPie/>
      </CardContent>
    </Card>
  );
};
