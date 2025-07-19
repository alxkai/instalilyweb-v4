import { PortableTextBlock, Slug, Image } from 'sanity';

/*
 * Deck
 */

export type DeckType = {
    _id: string;
    name: string;
    preview: Image;
    audiences: AudienceType[];
    slides: SlideType[];
    _updatedAt: string;
};

export interface DeckExtendedType extends DeckType {
    slides: (SlideType & {
        imgName: string;
        gifImgName: string;
    })[];
};

export type AudienceType = {
    name: string;
    clientId: string;
    deckTitle: string;
    welcomeMessage: string;
    inputMessage: string;
    view: "slideshow" | "one-page";
    disableEmailNotification: boolean;
    disableLogin: boolean;
};

export type GifSlideType = {
    gif: DeckAnimationType;
    transformX: number;
    transformY: number;
    scale: number;
    slide: Image;
}

export type VideoSlideType = {
    video: DemoVideoType;
    title: string;
    subtitle: string;
}

export type SlideType = Image | GifSlideType | VideoSlideType;

export type DeckAnimationType = {
    _id: string;
    name: string;
    img: Image;
    transformX: number;
    transformY: number;
    scale: number;
};

export type DemoVideoType = {
    _id: string;
    name: string;
    description: string;
    url: string;
    gated: boolean;
    slug: Slug;
    clientName: string;
};

/*
 * Brand Site
 */

export type PostType = {
    name: string;
    description: string;
    createdAt: string;
    slug: Slug;
    thumbnail: Image;
    externalUrl: string;
    videoUrl: string;
    hidden: boolean;
    gated: boolean;
    gatedMessage: string;
    images: Image[];
    content: PortableTextBlock[];
};

export type ProfileType = {
    name: string;
    username: string;
    position: string;
    description: string;
    role: string;
    order: number;
    img: Image;
    logos: ProfileLogoType[];
};

export type ProfileLogoType = {
    img: Image;
    name: string;
    width: number;
};

export type SiteResourceType = {
    _id: string;
    key: string;
    file: File;
};

/*
 * Hiring
 */

export type OpenPositionFormField = {
    label: string;
    type: "short-answer" | "long-answer" | "file-upload";
    required: boolean;
}

export type OpenPositionType = {
    _id?: string;
    title: string;
    slug: Slug;
    location: string;
    type: "Full-time" | "Internship" | "";
    category: "Engineering" | "Business" | "Design" | "";
    form: OpenPositionFormField[];
    content: PortableTextBlock[];
    closed: boolean;
    new: boolean;
    _updatedAt: string;
};

export type CaseStudyType = {
    _id: string;
    name: string;
    duration: number;
    content: PortableTextBlock[];
};

export type HiringEmailTemplateType = {
    _id: string;
    name: string;
    senderName: string;
    senderEmail: string;
    ccList: string;
    subject: string;
    content: PortableTextBlock[];
}; 