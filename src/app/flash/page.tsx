"use client";

import Flash from "@/components/flash/Flash";
import Flash2 from "@/components/flash2/Flash2";
import Flash3 from "@/components/flash3/Flash3";
import React, { useState } from "react";

const Flashes = () => {
  const [page, setPage] = useState<1 | 2 | 3>(1);
  const changePage = (n: 1 | 2 | 3) => {
    setPage(n);
  };
  if (page === 1) {
    return <Flash change={changePage} />;
  }
  if (page === 2) {
    return <Flash2 change={changePage} />;
  }
  if (page === 3) {
    return <Flash3 change={changePage} />;
  }
};

export default Flashes;
