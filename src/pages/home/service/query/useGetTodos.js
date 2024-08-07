import { useQuery } from "@tanstack/react-query";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["get-todos"],
    queryFn: () => {
      return request.get("/todos").then((res) => res.data);
    },
  });
};
