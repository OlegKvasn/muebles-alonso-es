"use client";

import SearchIcon from "../icons/search";
import styles from "./searchBar.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.replace(`/search?${newParams}`);
  }
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        name="search"
        placeholder="Estoy Buscando..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
      />
      <div className={styles.icon}>
        <SearchIcon height="1.25rem" />
      </div>
    </form>
  );
};

export default SearchBar;
