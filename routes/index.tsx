import { Handlers, PageProps, FreshContext } from "$fresh/server.ts";
import Buscar from "../components/Buscar.tsx";

interface Data {
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req: Request, ctx: FreshContext<unknown, Data>) {
    const url = new URL(req.url);
    const query = url.searchParams.get("telefono") || "";
    return ctx.render({ query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  return (
    <div>
      <Buscar />
        Telefono {data.query} leido con exito
    </div>
  );
}