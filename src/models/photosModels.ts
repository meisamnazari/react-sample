export type PhotosModel = {
    id: string;
    title: string;
    year: string;
    imageUrl: string;
    description: string;
    tags: tagsModel[];
}

export type tagsModel = {
    id: string; name: string; tagColor: string
}