import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { NavLink } from "@mantine/core";
import { deferred_path, merging_path, prefetching_path, index_path } from "../routes";

export default function Navbar() {
  const { component } = usePage();
  return (
    <>
      <NavLink component={Link} href={index_path()} label="Index" active={component === "Items/Index"} />
      <NavLink component={Link} href={deferred_path()} label="Deferred Props" active={component === "Items/DeferredProps"} />
      <NavLink component={Link} href={merging_path()} label="Merging Props" active={component === "Items/MergingProps"} />
      <NavLink
        component={Link}
        href={prefetching_path()}
        label="Prefetching"
        active={component === "Items/Prefetching"}
        prefetch
        cacheFor={["5s", "1m"]}
      />
    </>
  );
}
