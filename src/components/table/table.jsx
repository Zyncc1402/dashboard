import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const Tabless = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[220px] thead">Name</TableHead>
          <TableHead className="thead">Status</TableHead>
          <TableHead className="thead">Date</TableHead>
          <TableHead className="text-right w-[120px] thead">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-x-2">
              <Image
                alt="avatar"
                src={"/noavatar.png"}
                width={30}
                height={30}
                className="avatar rounded-full"
              />
              John Doe
            </div>
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>16/02/24</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-x-2">
              <Image
                alt="avatar"
                src={"/noavatar.png"}
                width={30}
                height={30}
                className="avatar rounded-full"
              />
              John Doe
            </div>
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>16/02/24</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-x-2">
              <Image
                alt="avatar"
                src={"/noavatar.png"}
                width={30}
                height={30}
                className="avatar rounded-full"
              />
              John Doe
            </div>
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>16/02/24</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Tabless;
