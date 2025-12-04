import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import type { ProductPageResponse } from "@/utils/type";
import type React from "react";
import { Button } from "../ui/button";
// PaginationEllipsis,
type Props = {
  data: ProductPageResponse;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
const PaginationContainer: React.FC<Props> = ({ data, page, setPage }) => {
  const totalPages = data.totalPages;
  return (
    <div className="mb-8">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage(page - 1)}
              size={"default"}
              disabled={page === 1}
            />
          </PaginationItem>
          {data.page > 1 && (
            <Button onClick={() => setPage(1)} variant={"outline"}>
              1
            </Button>
          )}
          {data.page > 10 && (
            <Button onClick={() => setPage(data.page - 10)} variant={"outline"}>
              {data.page - 10}
            </Button>
          )}
          {totalPages > 2 && data.page > 2 && <PaginationEllipsis />}
          <Button>{data.page}</Button>
          {totalPages > 2 && data.page < totalPages - 1 && (
            <PaginationEllipsis />
          )}
          {data.page < totalPages - 10 && (
            <Button onClick={() => setPage(data.page + 10)} variant={"outline"}>
              {data.page + 10}
            </Button>
          )}
          {data.page < totalPages && (
            <Button onClick={() => setPage(totalPages)} variant={"outline"}>
              {totalPages}
            </Button>
          )}
          <PaginationItem>
            <PaginationNext
              size={"default"}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationContainer;
