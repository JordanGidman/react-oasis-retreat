import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  // The useQuery hook needs an object with both a queryKey which will identify the data which needs to be an array. And the queryFn which is the function to actually do the querying.
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({ queryKey: ["cabins"], queryFn: getCabins });

  return { isLoading, error, cabins };
}
