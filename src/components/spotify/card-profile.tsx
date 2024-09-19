import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  AvatarFallback,
  TopSongsCarousel
} from '@/components';

export const ProfileSpotifyCard = () => {
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
      <CardContent className={'flex place-content-center'}>
        <TopSongsCarousel/>
      </CardContent>
    </Card>
  );
};
