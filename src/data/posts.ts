export interface MarkdownPost {
  url: URL;
  frontmatter: {
    title: string;
    description: string;
    publishDate: string;
    featuredImage: string;
    tags: string[];
    hero?: boolean;
  };
}
