interface ITag {
  title: string;
  personalize_tag: string;
}
export const getUserPersonalizedTag = (tags: ITag[]) => {
  return {
    title: "User Personalized Fields",
    tags: tags.map((eachTag) => ({ title: eachTag.title, value: eachTag.personalize_tag })),
  };
};
