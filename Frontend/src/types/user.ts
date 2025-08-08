
export type User = {
    _id: string;
    name: string;
    email: string;
    image?: string;
    githubId?: string;
    googleId?: string;
    facebookId?: string;
    isArtist: boolean;
    isVerified: boolean;
    likeSongs:[string];
    role: "user" | "artist" | "admin";
    bio: string;
    location: string;
    socialLinks: Record<string, string>;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  };