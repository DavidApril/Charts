import {TooltipProvider, Tooltip, TooltipTrigger, Badge, TooltipContent} from '@/components';

interface Props {
  tooltipContent?: string;
  label: string;
  to: string;
}

export const SocialNetworkBadgeWithTooltip = ({tooltipContent, to, label}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a target={'_blank'} referrerPolicy={'no-referrer'} href={to}>
            <Badge variant="secondary">{label}</Badge>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
