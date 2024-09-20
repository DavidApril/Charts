import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  AvatarFallback,
  TopSongsCarousel,
  SocialNetworkBadgeWithTooltip,
  AvatarSkeleton,
  Badge
} from '@/components';
import {SpotifyUserInfo} from '@/interfaces';
import {SpotifyService} from '@/services';
import {useEffect, useCallback, useState} from 'react';

export const ProfileSpotifyCard = () => {

  const [userProfile, setUserProfile] = useState<SpotifyUserInfo>();

  const getProfileInformation = useCallback(() => {
    SpotifyService.getProfileByUser('yizuskraist')
      .then(u => setUserProfile(u));
  }, []);

  useEffect(() => {
    getProfileInformation();
  }, []);

  console.log({userProfile});

  return (
    <Card>
      <CardHeader>
        {userProfile ? <div className={'flex gap-5'}>
          <Avatar className={'h-20 w-20'}>
            <AvatarImage src={userProfile.images[0].url}/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className={'flex flex-col gap-3 justify-center'}>
            <CardTitle>{userProfile?.display_name}</CardTitle>
            <CardDescription className={'flex gap-1'}>
              <SocialNetworkBadgeWithTooltip
                tooltipContent={`Go to ${userProfile?.display_name}'s Spotify profile`}
                label={userProfile.id} to={userProfile.external_urls.spotify}/>
              <Badge variant={'outline'}>
                {userProfile.followers.total} followers
              </Badge>
            </CardDescription>
          </div>
        </div> : <AvatarSkeleton/>}
      </CardHeader>
      <CardContent className={'flex place-content-center'}>
        <TopSongsCarousel/>
      </CardContent>
    </Card>
  );
};
