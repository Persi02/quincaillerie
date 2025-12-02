import { buildPrevAndNext, buildurl } from "@/utils/pagination";
import { useLoaderData, useLocation } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { type ReactNode } from "react";
import type { ProductPageResponse } from "@/utils/type";

const PaginationContainer = () => {
  const { totalProducts, limit } = useLoaderData() as ProductPageResponse;
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const pageActive: number = Number(searchParams.get("page")) || 1;
  const objectPerPage = limit ? limit : 0;
  const objectsInTotal: number = totalProducts ? totalProducts : 0;
  let lastPage: number;
  if (objectsInTotal % objectPerPage === 0) {
    lastPage = objectsInTotal / objectPerPage;
  } else {
    lastPage = Math.floor(objectsInTotal / objectPerPage) + 1;
  }
  const { nextUrl, prevUrl } = buildPrevAndNext({
    page: pageActive,
    pathname,
    search,
    lastPage,
  });
  const buildBtn = ({
    page,
    isActive,
  }: {
    page: number;
    isActive: boolean;
  }): ReactNode => {
    const url = buildurl({ page, pathname, search });
    return (
      <PaginationItem key={page}>
        <PaginationLink to={url} isActive={isActive} size={"default"}>
          {page}
        </PaginationLink>
      </PaginationItem>
    );
  };
  const buildDots = (key: string): ReactNode => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis />
      </PaginationItem>
    );
  };

  const buildContent = (): ReactNode[] => {
    const pages: ReactNode[] = [];

    pages.push(buildBtn({ page: 1, isActive: pageActive === 1 }));

    if (pageActive !== 1 && pageActive !== lastPage) {
      pages.push(
        buildBtn({ page: pageActive, isActive: pageActive === pageActive })
      );
    }
    if (pageActive !== lastPage && pageActive < lastPage - 10) {
      pages.push(
        buildBtn({
          page: pageActive + 10,
          isActive: pageActive + 10 === pageActive,
        })
      );
    }
    if (lastPage > 2) {
      if (pageActive !== lastPage - 1) {
        pages.push(buildDots("dots"));
      }
    }
    pages.push(buildBtn({ page: lastPage, isActive: pageActive === lastPage }));

    return pages;
  };
  if (lastPage < 2) {
    return null;
  }

  return (
    <div className="mb-8">
      <Pagination>
        <PaginationContent>
          {pageActive > 1 && objectsInTotal > objectPerPage && (
            <PaginationItem>
              <PaginationPrevious to={prevUrl} size={"default"} />
            </PaginationItem>
          )}
          {buildContent()}
          {pageActive < lastPage && objectsInTotal > objectPerPage && (
            <PaginationItem>
              <PaginationNext to={nextUrl} size={"default"} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationContainer;
