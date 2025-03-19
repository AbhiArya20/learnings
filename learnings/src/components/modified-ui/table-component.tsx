import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode } from "react";

type Column<T> = {
  key: string;
  label: string;
  className?: string;
  accessor: (row: { id?: string & T }) => ReactNode;
};

type TableComponentProps<T> = {
  caption: ReactNode;
  footer: ReactNode;
  columns: Column<T>[];
  data: { id?: string & T }[];
};

export default function TableComponent<T>({
  caption,
  footer,
  columns = [],
  data = [],
}: TableComponentProps<T>) {
  return (
    <Table className="overflow-hidden rounded-2xl border-2 border-collapse">
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader className="bg-accent cursor-pointer">
        <TableRow>
          {columns.map((col, idx) => (
            <TableHead key={col.key || idx}>{col.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="overflow-hidden">
        {columns.length && data.length === 0 ?
          <TableRow>
            <TableCell colSpan={columns.length} className="">
              No data found.
            </TableCell>
          </TableRow>
        : <>
            {data.map((row, idx) => (
              <TableRow
                key={row.id || idx}
                className={`cursor-pointer ${idx % 2 && "bg-accent/20"}`}
              >
                {columns.map((col) => (
                  <TableCell key={col.key || idx} className={col.className}>
                    {col.accessor(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </>
        }
      </TableBody>
      {footer && <TableFooter>{footer}</TableFooter>}
    </Table>
  );
}
