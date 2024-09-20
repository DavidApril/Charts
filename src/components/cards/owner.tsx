import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  AvatarFallback,
  ChartPie,
  SocialNetworkBadgeWithTooltip
} from '@/components';

export const OwnerCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className={'flex gap-5'}>
          <Avatar className={'h-60 w-60'}>
            <AvatarImage src="https://github.com/DavidApril.png" alt="@DavidApril"/>
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <div className={'flex flex-col gap-2'}>
            <CardTitle>Jesús David Agámez Cantillo</CardTitle>
            <CardDescription>Front End Developer</CardDescription>
            <CardDescription className={'text-xl'}>
              Software Engineering student with more than a year and a half of experience as a front-end developer. My
              ability to face new challenges and learn in an agile way allows me to successfully integrate into new
              projects, quickly adapting to a new team and its methodology.
            </CardDescription>
            <CardDescription className={'flex flex-wrap gap-1'}>
              <SocialNetworkBadgeWithTooltip
                tooltipContent={'Go to Github'} label={'@DavidApril'}
                to={'https://github.com/DavidApril'}/>
              <SocialNetworkBadgeWithTooltip
                tooltipContent={'Go to linkedin'} label={'LinkedIn'}
                to={'https://www.linkedin.com/in/david-ag%C3%A1mez/'}/>
            </CardDescription>
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
