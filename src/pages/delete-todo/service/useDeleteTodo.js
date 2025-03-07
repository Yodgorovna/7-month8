import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useDeleteTodo = (id) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      request.delete(`/todos/${id}`, data).then((res) => res.data),
  });
};
