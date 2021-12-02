import { Image } from "./image";

export class AnimeAttributes {
    abbreviatedTitles: string[];
    ageRating: string;
    ageRatingGuide: string;
    averageRating: string;
    canonicalTitle: string;
    coverImage: Image;
    createdAt: string;
    description: string;
    synopsis: string;
    startDate: string;
    endDate: string;
    episodeCount: number;
    posterImage: Image;
    subType: string;
    status: string;
    popularityRank: number;
    titles: {
        en: string;
        en_jp: string;
        ja_jp: string;
    }
}
