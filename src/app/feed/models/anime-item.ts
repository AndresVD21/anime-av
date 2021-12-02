import { AnimeAttributes } from "./anime-attributes";

export class AnimeItem {
    id: string;
    type: string;
    attributes: AnimeAttributes;

    getCanonicalTitle(): string {
        return this.attributes.canonicalTitle;
    }

    getTitles() {
        return this.attributes.titles;
    }

    getAnimeAttributes(): AnimeAttributes {
        return this.attributes;
    }

    getIntegerRating(): number {
        return Math.ceil(+this.attributes.averageRating);
    }
}
