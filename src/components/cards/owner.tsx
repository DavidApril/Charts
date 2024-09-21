import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  SocialNetworkBadgeWithTooltip,
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarSkeleton,
} from '@/components';
import {GithubUser} from '@/interfaces';
import {HTMLAttributes} from 'react';

interface OwnerCardProps extends HTMLAttributes<HTMLDivElement> {
  githubUser?: GithubUser;
}

export const OwnerCard = ({githubUser, ...props}: OwnerCardProps) => {
  return (
    <Card {...props}>
      {githubUser
        ? <CardHeader className={'flex flex-row gap-3'}>
          <Avatar className={'h-20 w-20'}>
            <AvatarImage src={githubUser.avatar_url} alt="@DavidApril"/>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{githubUser.name}</CardTitle>
            <CardDescription>Software Engineer Student</CardDescription>
            <CardDescription className={'text-xl my-3'}>{githubUser.bio}</CardDescription>
            <CardDescription className={'flex flex-wrap gap-1'}>
              <SocialNetworkBadgeWithTooltip
                tooltipContent={`Go to ${githubUser.login} profile`}
                label={`Github - ${githubUser.followers} followers`}
                to={'https://github.com/DavidApril'}/>
              <SocialNetworkBadgeWithTooltip
                tooltipContent={'Go to linkedin'} label={'LinkedIn'}
                to={'https://www.linkedin.com/in/david-ag%C3%A1mez/'}/>
              <SocialNetworkBadgeWithTooltip
                tooltipContent={`Send email`} label={`${githubUser.email}`}
                to={'https://github.com/DavidApril'}/>
            </CardDescription>
          </div>
        </CardHeader>
        : <AvatarSkeleton/>}
      <CardContent className={'flex'}>
        {/*<GithubStats/>*/}
      </CardContent>
    </Card>
  );
};
