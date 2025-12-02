interface BuildurlProps {
  page: number;
  pathname: string;
  search: string;
}
interface BuildPrevAndNext extends BuildurlProps {
  lastPage: number;
}
export const buildurl = ({ page, pathname, search }: BuildurlProps): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set("page", page.toString());
  const url = `${pathname}?${searchParams.toString()}`;
  return url;
};

export const buildPrevAndNext = ({
  page,
  pathname,
  search,
  lastPage,
}: BuildPrevAndNext): { prevUrl: string; nextUrl: string } => {
  const prevUrl =
    page > 1 ? buildurl({ page: page - 1, pathname, search }) : "";
  const nextUrl =
    page < lastPage ? buildurl({ page: page + 1, pathname, search }) : "";
  return { prevUrl, nextUrl };
};
