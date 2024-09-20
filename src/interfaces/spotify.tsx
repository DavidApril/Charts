export interface SpotifyTokens {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface SpotifyUserInfo {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  type: string;
  uri: string;
}
