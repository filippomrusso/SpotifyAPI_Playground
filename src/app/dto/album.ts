import { Track } from "./track";

export interface Album {

    id: string,
    type: string;
    imageUrl: string;
    name: string;
    releaseDate: Date;
    totalTracks: number;
    spotifyUrl: string,
    apiTracks: string,
    trackList: Array<Track>
}