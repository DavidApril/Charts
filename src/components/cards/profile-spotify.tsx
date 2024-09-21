import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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

  return (
    <Card>
      <CardHeader>
        {userProfile ? <div className={'flex gap-5'}>
          <div className={'flex flex-col gap-3'}>
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
      <CardContent>
        <TopSongsCarousel/>
      </CardContent>
    </Card>
  );
};
